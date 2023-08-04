// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer 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",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: req.body.to,
            },
          ],
        },
      ],
      from: {
        email: "jlpcalma@gmail.com",
      },
      subject: req.body.subject,
      content: [
        {
          type: "text/plain",
          value: req.body.content,
        },
      ],
      attachments: req.body.attachments,
    }),
  }).then((data) => {
    res.status(200).json({ success: true });
  });
}
