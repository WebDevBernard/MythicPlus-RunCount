import { useEffect, useState } from "react";
import { IProps } from "../store/interface";
import { mockData } from "../mock-data/mock-data";
/**
 
Example of JSON Object:

{
 "date": "2022-03-18T12:00:30PST",
 "week": 2,
 "season": 3,
 "affix": "Fortified-Bursting-Storming-Encrypted",
 "expansion": "sl",
 "total": 1037600
}

 **/

const useWowData = (expansionName: string, season: number) => {
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<IProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const responseData = mockData;

      // Filter and sort
      const filterExpansionSeason = responseData
        .filter((item: IProps) => item.expansion === expansionName)
        .filter((item: IProps) => item.season === season)
        .sort((a: IProps, b: IProps) => a.week - b.week);

      // ✅ REMOVE the cumulative sum step - data is already cumulative per affix!

      // Calculate weekly totals by subtracting previous occurrence of same affix
      const weeklyTotals = filterExpansionSeason.map((obj: IProps) => {
        // Find previous occurrence of the same affix
        const previousIndex = filterExpansionSeason.findIndex(
          (item: IProps, idx: number) =>
            idx < filterExpansionSeason.indexOf(obj) && item.affix === obj.affix
        );

        if (previousIndex === -1) {
          // First occurrence of this affix - use total as-is
          return { ...obj };
        } else {
          // Subtract previous occurrence to get this week's runs
          return {
            ...obj,
            total: obj.total - filterExpansionSeason[previousIndex].total,
          };
        }
      });

      setData(weeklyTotals);
      setLoading(false);
    };

    fetchData();
  }, [expansionName, season]);

  return { loading, error, data };
};

export default useWowData;
