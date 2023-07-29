export function getLocalFile(key){
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem(key))
      } 
}


 export const colors = [
  "#283593",
  "#546E7A",
  "#C2185B",
  "#212121",
  "#00C853",
  "#FFA000",
];
export let themes = [
  {
    LtextColor: "#00695C",
    RtextColor: "#90CAF9",
    iconColor: "#66BB6A",
    backgroundTheme: "#283593",
  },
  {
    LtextColor: "#00695C",
    RtextColor: "#EF9A9A",
    iconColor: "#FB8C00",
    backgroundTheme: "#546E7A",
  },
  {
    LtextColor: "#EF6C00",
    RtextColor: "#80CBC4",
    iconColor: "#AFB42B",
    backgroundTheme: "#C2185B",
  },
  {
    LtextColor: "#827717",
    RtextColor: "#FBC02D",
    iconColor: "#D32F2F",
    backgroundTheme: "#212121",
  },
  {
    LtextColor: "#AD1457",
    RtextColor: "#BF360C",
    iconColor: "#A1887F",
    backgroundTheme: "#00C853",
  },
  {
    LtextColor: "#7B1FA2",
    RtextColor: "#00897B",
    iconColor: "#607D8B",
    backgroundTheme: "#FFA000",
  },
];
