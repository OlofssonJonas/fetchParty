const partyGuests = document.getElementById("partyGuests");
const notComing = document.getElementById("notComing");

const fetchGuests = async () => {
  const res = await fetch("https://viktoriainbjudan.herokuapp.com/api/kids/admin");
  const data = await res.json();
  console.log(data[1]);

  const isComing = data.filter((guest) => guest.isComing == true);
  const isNotComing = data.filter((guest) => guest.isComing == false);

  for (let i = 0; i < isComing.length; i++) {
    const p = document.createElement("p");
    p.innerText =
      "Namn: " + isComing[i].name + " Meddelande: " + isComing[i].content + "Datum:" + isComing[i].created_date ;
    partyGuests.appendChild(p);

    console.log(data[i].isComing);
    console.log(data[i].isNotComing);
  }

  for (let i = 0; i < isNotComing.length; i++) {
    const p = document.createElement("p");
    p.innerText =
      "Namn: " + isComing[i].name + " Meddelande: " + isComing[i].content;
    notComing.appendChild(p);
  }
};

fetchGuests();
