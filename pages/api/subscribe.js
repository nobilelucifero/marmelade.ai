// from https://leerob.io/blog/mailchimp-next-js
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});
// export default function handler(req, res) {

export default async function handler(req, res) {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: "subscribed",
    });

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(400).json({
      error: "Your email was already registered." || error.toString(),
    });
    // return res.status(500).json({ error: error.message || error.toString() });
  }
}
