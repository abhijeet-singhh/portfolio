import axios from "axios";
import https from "https";

const getWakaStatus = async () => {
  const API_KEY = process.env.WAKATIME_API_KEY;
  if (!API_KEY) {
    console.error("WAKATIME_API_KEY is missing");
    return { success: false };
  }

  const encodedKey = Buffer.from(API_KEY.trim()).toString("base64");

  try {
    const response = await axios.get(
      "https://wakatime.com/api/v1/users/current/summaries",
      {
        params: { start: "yesterday", end: "today" },
        headers: {
          Authorization: `Basic ${encodedKey}`,
          Accept: "application/json", // Best practice
        },
        httpsAgent: new https.Agent({ family: 4 }),
        timeout: 8000,
      },
    );

    // Safety check: Ensure data exists before accessing index [0] and [1]
    const data = response.data?.data;
    if (!data || data.length < 2) {
      return {
        isCoding: false,
        todayText: "0s",
        yesterdayText: "0s",
        success: true,
      };
    }

    const yesterdayData = data[0];
    const todayData = data[1];

    const format = (text: string) =>
      text
        .replace(/ hrs?/, "h")
        .replace(/ mins?/, "m")
        .replace("secs", "s");

    const todayTotal = todayData.grand_total.text;

    // Improved check for "zero" activity
    const isActiveToday =
      todayTotal !== "0 secs" &&
      todayTotal !== "0 hrs 0 mins" &&
      todayTotal !== "0h 0m";

    return {
      isCoding: isActiveToday,
      todayText: format(todayTotal),
      yesterdayText: format(yesterdayData.grand_total.text),
      success: true,
    };
  } catch (error: any) {
    // Log meaningful errors for debugging, but hide from users
    console.error("WakaTime API Error:", error.message);
    return { success: false };
  }
};

export { getWakaStatus };
