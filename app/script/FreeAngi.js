function fetching() {
  return fetch("https://api.npoint.io/7915813b5c6c20fecb21")
    .then((response) => response.json())
    .then((initialData) => {
      // console.log(initialData );

      const groupByUruuniiDugaar = (data) => {
        const groupedData = {};
        data.forEach((item) => {
          const {
            uruunii_khuviin_dugaar,
            garag,
            ekhlekh_tsag,
            duusakh_tsag,
            davtamj,
            oroltyn_too,
          } = item;
          if (!groupedData[uruunii_khuviin_dugaar]) {
            groupedData[uruunii_khuviin_dugaar] = {};
          }
          if (davtamj === "7 хоног тутам" && oroltyn_too === 16) {
            if (!groupedData[uruunii_khuviin_dugaar][garag]) {
              groupedData[uruunii_khuviin_dugaar][garag] = [];
            }
            groupedData[uruunii_khuviin_dugaar][garag].push({
              ekhlekh_tsag,
              duusakh_tsag,
            });
          }
        });
        return groupedData;
      };

      // Function to convert grouped data to the desired structure
      const convertToDesiredStructure = (groupedData) => {
        const result = [];
        for (const uruunii_khuviin_dugaar in groupedData) {
          const garagGroup = [];
          for (const garag in groupedData[uruunii_khuviin_dugaar]) {
            garagGroup.push({
              garag,
              khicheeliin_tsag: groupedData[uruunii_khuviin_dugaar][garag],
            });
          }
          result.push({
            uruunii_khuviin_dugaar,
            garagGroup,
          });
        }
        return result;
      };

      // Group the data by "uruunii_khuviin_dugaar" and then by "garag"
      const groupedByUruuniiDugaar = groupByUruuniiDugaar(initialData);
      // Convert the grouped data to the desired structure
      let huwaariArray = convertToDesiredStructure(groupedByUruuniiDugaar);

      let calculatingDate = new Date(currYear, currMonth - 1, startDay);
      let garagOfDate = calculatingDate.getDay();

      const weekdays = [
        "Ням",
        "Даваа",
        "Мягмар",
        "Лхагва",
        "Пүрэв",
        "Баасан",
        "Бямба",
      ];
      const weekdayName = weekdays[garagOfDate];

      let freeHuwaariArray = [];

      huwaariArray.forEach((element) => {
        let updatedGaragGroups = [];

        element.garagGroup.forEach((garagGroup) => {
          const classHoursSet = new Set([
            740, 825, 920, 1005, 1100, 1145, 1240, 1325, 1420, 1505, 1600, 1645,
            1740, 1825, 1920, 2005, 2100, 2145,
          ]);

          garagGroup.khicheeliin_tsag.forEach((khicheel) => {
            const ekhlekh_tsag = convertToNumber(khicheel.ekhlekh_tsag);
            const duusakh_tsag = convertToNumber(khicheel.duusakh_tsag);

            for (const item of classHoursSet) {
              if (item >= ekhlekh_tsag && item <= duusakh_tsag) {
                classHoursSet.delete(item);
              }
            }
          });

          updatedGaragGroups.push({
            garag: garagGroup.garag,
            classHoursSet: Array.from(classHoursSet),
          });
        });

        freeHuwaariArray.push({
          uruunii_khuviin_dugaar: element.uruunii_khuviin_dugaar,
          garagGroup: updatedGaragGroups,
        });
      });

      console.log(freeHuwaariArray);
      console.log("aaa");
      return freeHuwaariArray;
    });
}
fetching();
