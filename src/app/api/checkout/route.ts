import { NextRequest, NextResponse } from "next/server";
import { ProductType } from "../../../../type";
import Stripe from "stripe";

export const POST = async (request: NextRequest) => {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
    try {
        const reqBody = await request.json();
        const { items, email } = await reqBody;
        const extractive = await items?.map((item: ProductType) => ({
            quantity: item?.quantity,
            price_data: {
                currency: "usd",
                unit_amount: Math.round(item?.price * 100 * (1 - item?.discountPercentage / 100)),
                product_data: {
                    name: item?.title,
                    description: item?.description,
                    images: [item?.images[0]],
                }
            },
        }))

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: extractive,
            mode: 'payment',
            success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
            metadata: {
                email,
            }
        })

        console.log(session, "Session");

        return NextResponse.json({
            message: "keep alive",
            id: session?.id,
        })
    } catch (error) {
        const err = error as Error;
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}