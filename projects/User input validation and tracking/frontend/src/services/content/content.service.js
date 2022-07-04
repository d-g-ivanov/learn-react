const sample = [
  {
    range: [10, 23],
    message:
      'This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank.”'
  },
  {
    range: [0, 23],
    message:
      'Include a valuable metric if possible. For example: "Increased revenue by 20% within one month.".'
  }
];

export const checkContent = (content) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (content === "I've done many projects")
        resolve(JSON.parse(JSON.stringify(sample)));
      else resolve([]);
    }, 1000);
  });
};
