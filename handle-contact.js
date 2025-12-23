const fs = require("fs");

const dataFolder = "./data";
const dataFile = "./data/data.json";

if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
}

if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, "[]", "utf-8");
}

const loadData = () => {
  const raw = fs.readFileSync(dataFile);
  const data = JSON.parse(raw);
  return data;
};

const listContacts = () => {
  const data = loadData();
  console.log("List of users:");
  data.forEach((argv, i) => {
    i = i + 1;
  });
  rl.close();
};

const infoContact = (nama) => {
  const data = loadData();
  const contact = data.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );
  if (!contact) {
    console.log(`Contact with name ${nama} not found`);
    rl.close();
  } else {
    console.log(
      `Name: ${contact.nama} \nEmail: ${contact.email || "-"} \nPhone: ${
        contact.nohp
      }`
    );
    rl.close();
  }
};

module.exports = { loadData, infoContact };
