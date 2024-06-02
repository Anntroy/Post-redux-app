(function () {
  const currentURL = window.location.href;
  if (!currentURL.includes("purchased")) return;

  const params = new URLSearchParams(window.location.search);
  const price = params.get("final_price");
  const decimalPointIndex = price.length - 2;
  const priceAsFloat =
    price.slice(0, decimalPointIndex) + "." + price.slice(decimalPointIndex);

  const courseNames = {
    240431: "All-access",
    417695: "Python",
    2037633: "React 18: Part 1",
    2074069: "React 18: Part 2",
    2178940: "Next.js: Part 1",
    2187934: "Next.js: Part 2",
    2187911: "Next.js Bundle",
    1270682: "HTML Bundle",
    525068: "SQL",
    1860251: "C++ Bundle",
    606250: "Java Bundle",
    1896395: "JavaScript Bundle",
    1779784: "TypeScript",
    1607597: "Django Bundle",
    959159: "React Native Bundle",
    1359863: "Docker",
    1120640: "Git",
    680815: "Data Structures Bundle",
    733596: "Design Patterns Bundle",
    1116085: "C# Bundle",
    783424: "Redux",
    293204: "Node",
    357787: "React 16",
    1422300: "Django: Part 1",
    1522608: "Django: Part 2",
    1604024: "Django: Part 3",
    496060: "Full-stack JavaScript Bundle",
    324741: "JavaScript: Part 1",
    310571: "JavaScript: Part 2",
    206545: "Angular 4",
    222293: "ASP.NET MVC 5",
    1857029: "C++: Part 1",
    1857235: "C++: Part 2",
    1886156: "C++: Part 3",
    223623: "C#: Part 1",
    224763: "C#: Part 2",
    225147: "C#: Part 3",
    236371: "Entity Framework",
    222794: "Unit Testing C#",
    223139: "Xamarin",
    1260591: "HTML: Part 1",
    1269823: "HTML: Part 2",
    1269822: "HTML: Part 3",
    887220: "React Native: Part 1",
    955852: "React Native: Part 2",
    496615: "Full-stack .NET",
    759570: "Design Patterns: Part 1",
    760032: "Design Patterns: Part 2",
    1467728: "Design Patterns: Part 3",
    639884: "Data Structures: Part 1",
    650827: "Data Structures: Part 2",
    680168: "Data Structures: Part 3",
    580597: "Java: Part 1",
    606251: "Java: Part 2",
    711980: "Java: Part 3",
    225594: "Clean Code",
    222856: "Angular 4: Busy Developers",
    235779: "ASP.NET Core",
    271672: "Double Your Coding Speed",
  };

  const reportToPageSense = () => {
    window.pagesense = window.pagesense || [];
    window.pagesense.push(["trackEvent", "Purchase Course"]);
    console.log(["trackRevenue", "Purchase Course"]);

    // Learn more in less time (course page)
    window.pagesense.push(["trackRevenue", "Qv7eMZV", priceAsFloat]);
    console.log(["trackRevenue", "Qv7eMZV", priceAsFloat]);
    // Home page variation (removed why code with mosh and moved up courses)
    window.pagesense.push(["trackRevenue", "Shzv6kh", priceAsFloat]);
    console.log(["trackRevenue", "Shzv6kh", priceAsFloat]);
  };

  // const reportToGoogle = () => {
  //   gtag("event", "purchase", {
  //     transaction_id: params.get("sale_id"),
  //     value: priceAsFloat,
  //     tax: params.get("tax_charge"),
  //     shipping: 0,
  //     currency: "USD",
  //     coupon: params.get("coupon"),
  //     items: [
  //       {
  //         item_id: courseId,
  //         item_name: courseNames[courseId],
  //       },
  //     ],
  //   });
  // };

  const courseId = params.get("purchased_course_id");
  if (courseNames[courseId]) {
    // reportToGoogle();
    reportToPageSense();
  }
})();
