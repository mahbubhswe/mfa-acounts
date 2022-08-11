import Payment from "../../../models/Payment.js";
import nextConnect from "next-connect";
import connectMongo from "../../../utils/connectMongo.js";
import { isAuth, isAdmin } from "../../../utils/auth.js";
const handler = nextConnect();
handler.use(isAuth);
handler.post(async (req, res, next) => {
  try {
    await connectMongo();
    const newPayment = new Payment({
      ...req.body,
    });
    const payment = await newPayment.save();
    res.send("Payment Added successfully");
  } catch (error) {
    res.send(error.message);
  }
});

export default handler;
