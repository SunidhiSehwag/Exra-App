import { useEffect, useState } from "react";
import axios from "axios";

const CallingApi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.api-ninjas.com/v1/exercises?muscle=chest",
          {
            headers: {
              "X-Api-Key": "2/tQq7Kf2zuFJ888jafHWg==zKqhLyfBTEyQ7GA4",
            },
          }
        );
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      <h2>Exercise Data</h2>
    </div>
  );
};

export default CallingApi;
