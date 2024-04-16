const partyGuests = document.getElementById("partyGuests");
const notComing = document.getElementById("notComing");

const fetchGuests = async () => {
  const res = await fetch("https://viktoriainbjudan.herokuapp.com/api/kids/admin");
  const data = await res.json();
  console.log(data[1]);

  const isComing = data.filter((guest) => guest.isComing == true);
  const isNotComing = data.filter((guest) => guest.isComing == false);

  for (let i = 0; i < isComing.length; i++) {
    const li = document.createElement("li");
    li.classList.add("listItem")
    li.innerText =
      "Namn: " + isComing[i].name + " Meddelande: " + isComing[i].content + "\n" + "Datum:" + isComing[i].created_date.slice(0, 10);
    partyGuests.appendChild(li);

    console.log(data[i].isComing);
    console.log(data[i].isNotComing);
  }

  for (let i = 0; i < isNotComing.length; i++) {
    const li = document.createElement("li");
    li.innerText =
      "Namn: " + isNotComing[i].name + " Meddelande: " + isNotComing[i].content + "\n" + "Datum:" + isComing[i].created_date.slice(0, 10);
    notComing.appendChild(li);
  }
};

fetchGuests();
