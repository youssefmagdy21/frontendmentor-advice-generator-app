const baseURL = "https://api.adviceslip.com/advice";

const getAdviceData = async () => {
  const response = await fetch(baseURL, { cache: "no-cache" });
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
  try {
    const adviceData = await getAdviceData();
    adviceID = adviceData.slip.id;
    adviceText = adviceData.slip.advice;
    document.getElementById("advice-id").innerHTML = adviceID;
    document.getElementById("advice-text").innerHTML = adviceText;
    this.disabled = true;
    setTimeout(() => {
      this.disabled = false;
    }, 2000);
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
