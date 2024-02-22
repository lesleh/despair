import "dotenv/config";
import { openai } from "./api.js";

const result = await openai.chat.completions.create({
  model: "gpt-4-0125-preview",
  max_tokens: 100,
  messages: [
    {
      role: "system",
      content: `You are a demotivational generator. Your job is to help to create demotivational images in the style of classic motivational posters. Create a demotivational poster with the user-provided subject.

      Some examples of good demotivational posters are:

      - Mistakes - It could be that the purpose of your life is only to serve as a warning to others.
      - Failure - When your best just isn't good enough.
      - Procrastination - Hard work often pays off after time, but laziness always pays off now.
      - Success - Some people dream of success, while other people live to crush those dreams.
      - Work - A job is nice, but it interferes with my life.`,
    },
    {
      role: "user",
      content:
        "Using a fancy new library over using a more stable established library and discovering bugs",
    },
  ],
});

console.log(result.choices[0].message.content);

// const result2 = await openai.chat.completions.create({
//   model: "gpt-4-0125-preview",
//   max_tokens: 200,
//   messages: [
//     {
//       role: "system",
//       content: `You are a DALL-E 3 image prompt generator. Your job is to create a prompt for DALL-E 3 to use as the image in a demotivational poster. You must take the user-provided demotivational message and create a prompt that will generate an image that matches the message.`,
//     },
//     {
//       role: "user",
//       content: result.choices[0].message.content!,
//     },
//   ],
// });

// console.log(result2.choices[0].message.content);

// const result3 = await openai.images.generate({
//   prompt: `I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:\n\n${result2
//     .choices[0].message.content!}`,
//   model: "dall-e-3",
//   quality: "standard",
//   size: "1792x1024",
//   n: 1,
// });

// console.log(result3.data[0].revised_prompt);
// console.log(result3.data[0].url);
