function showTopic(topic) {
  const output = document.getElementById("output");
  if (topic === "binary") {
    output.innerHTML = `
      <strong>Binary Numbers</strong><br>
      Binary is a number system that uses only 0 and 1. Computers use binary because
      electronic circuits work using ON (1) and OFF (0) states.
    `;
  }

  else if (topic === "algorithm") {
    output.innerHTML = `
      <strong>Algorithm</strong><br>
      An algorithm is a step-by-step set of instructions used to solve a problem,
      just like a recipe tells you how to cook a dish.
    `;
  }

  else if (topic === "sql") {
    output.innerHTML = `
      <strong>SQL</strong><br>
      SQL (Structured Query Language) is used to store, retrieve, and manage data
      in a database.
    `;
  }

  else if (topic === "dbms") {
    output.innerHTML = `
      <strong>DBMS</strong><br>
      A Database Management System (DBMS) is software that helps store, organize,
      and manage large amounts of data efficiently.
    `;
  }

  else if (topic === "os") {
    output.innerHTML = `
      <strong>Operating System</strong><br>
      An operating system manages computer hardware and software resources and
      allows users to interact with the system.
    `;
  }
}
