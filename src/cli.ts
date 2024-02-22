import "dotenv/config";
import { openai } from "./api.js";

const originalContext =
  "Using a fancy new library over using a more stable established library and discovering bugs";

// const result = await openai.chat.completions.create({
//   model: "gpt-4-0125-preview",
//   max_tokens: 100,
//   messages: [
//     {
//       role: "system",
//       content: `You are a demotivational generator. Your job is to help to create demotivational images in the style of classic motivational posters. Create a demotivational poster with the user-provided subject.

//       Some examples of good demotivational posters are:

//       - Mistakes - It could be that the purpose of your life is only to serve as a warning to others.
//       - Failure - When your best just isn't good enough.
//       - Procrastination - Hard work often pays off after time, but laziness always pays off now.
//       - Success - Some people dream of success, while other people live to crush those dreams.
//       - Work - A job is nice, but it interferes with my life.`,
//     },
//     {
//       role: "user",
//       content: originalContext,
//     },
//   ],
// });

// const demotivationalLabel = result.choices[0].message.content!;
// console.log(demotivationalLabel);

// const demotivationalLabel =
//   "Innovation - Because stumbling through a forest of bugs in a fancy new library reminds us how smooth the old road was.";

// const result2 = await openai.chat.completions.create({
//   model: "gpt-4-0125-preview",
//   max_tokens: 256,
//   messages: [
//     {
//       role: "system",
//       content: `You are a DALL-E 3 image prompt generator. Your job is to create a prompt for DALL-E 3 to use as the image in a demotivational poster. You must take the user-provided demotivational message and create a prompt that will generate an image that matches the message.

//       Just return the DALL-E 3 prompt as is, without quote marks. Do not add any additional context or detail.`,
//     },
//     {
//       role: "user",
//       content: `Original context: ${originalContext}

//       Demotivational label: ${demotivationalLabel}`,
//     },
//   ],
// });

// const imagePrompt = result2.choices[0].message.content!;
// console.log(imagePrompt);
const imagePrompt =
  "A coder sitting lost amidst a dense, dark forest of oversized, glowing computer bugs, while in the distance, a smooth, paved road winds through a serene landscape, under a bright, clear sky.";

const result3 = await openai.images.generate({
  prompt: `I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS:\n\n${imagePrompt}`,
  model: "dall-e-3",
  quality: "standard",
  size: "1792x1024",
  n: 1,
});

console.log(result3.data[0].revised_prompt);
console.log(result3.data[0].url);
