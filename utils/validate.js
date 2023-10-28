const z = require("zod");

const schema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string().refine((value) => value === value.toLowerCase()),
});

const validate = (value) => {
  try {
    schema.parse(value);
    return;
  } catch (e) {
    return e;
  }
};

const test = validate({ id: 1, name: "sleep", slug: "value" });
console.log(test);

module.exports = validate;
