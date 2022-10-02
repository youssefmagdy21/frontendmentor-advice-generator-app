const baseURL = "https://api.adviceslip.com/advice";

const getAdviceData = async () => {
  const response = await fetch(baseURL);
  // console.log(response);
  try {
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (err) {
    console.log("something went wrong");
    console.error(err);
  }
};

async function generateAdvice(e) {
  e.preventDefault();
  try {
    const adviceData = await getAdviceData();
    adviceID = adviceData.slip.id;
    adviceText = adviceData.slip.advice;
    document.getElementById("advice-id").innerHTML = adviceID;
    document.getElementById("advice-text").innerHTML = adviceText;
    // console.log("Data displayed successfully");
  } catch (err) {
    document.getElementById("advice-text").innerHTML =
      "Something went wrong .. Please try again.";
    console.log("something went wrong");
    console.error(err);
  }
}

document
  .getElementById("generate-advice")
  .addEventListener("click", generateAdvice);
