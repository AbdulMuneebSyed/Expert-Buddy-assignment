import { NextResponse } from "next/server";

type Expert = {
  id: number;
  name: string;
  image: string;
  verified: boolean;
  superTutor: boolean;
  yearsExperience: number;
  rating: number;
  reviews: number;
  price: number | null;
  priceFixed: boolean;
  degree: string;
  field: string;
  online: boolean;
  responseTime: string;
  completedAssignments: number;
  plagiarismScore: number;
  favorite: boolean;
  flag: string | null;
};
const experts: Expert[] = [
  {
    id: 1,
    name: "Parvipan Deep S.",
    image:
      "https://s3-alpha-sig.figma.com/img/06f8/ffd2/8860ece6968355ec502c7afe0b216096?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWofRPrKrq0VhAagXGWYrizuYpk3ZTs7~K68-zSUba~sfODwbbEagBcH6SEh1jM1KKxITe-jNodO0HJhVeaVLn0ePLLjdbPciKJmP3t7Er23B~4x5EwHfTXHMlLAh0J3UPRUeu0v8yyAGmxvP1H~Q-ZlnwcRxqZzzihZKDlOB4REX-oSFo2i0VpdoK~3T6LVCRYkCLEcLrohkz7EzRDtGP7gHAGSSkloSLI4ka~UxUfuBiTYaImA~tURTcX~bIZjiDcKcKR1PoFnHOWtNH-OIjla9q2lmiOpLlZr6E3Y~0OSG-F8u3fDYDwBtaU6WxdIMFFUQcF4ARMFobqzUbvOxA__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: "top-rated",
  },
  {
    id: 2,
    name: "Aspen Stanton",
    image:
      "https://s3-alpha-sig.figma.com/img/8b9f/9ccd/5acdca558657f53c10bd154375cdf1e5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rKpcONUGlF3gNzYBjuPQVS0k8RrPDxoLoESpA6S3eWARoqs9n1FmPBWBdIVGP~CXzicz3Gr9Ux4R6jC~bRxGGNpnQaS0SVplBWrMB-Eqt4my-uUZcw5Pu4GfqWcSqipj7a7c0cHYJ3IAw0sHSAIVl3TPWHi4Y6zudqBC0Jai9Dp-Di09jyw7xhKv1AqvfrteS6vDW21~jWsa1Kq5--xYoqDLce8W~S-x7huhjAtngfhh7VC7dZl~udo9YyLjbl-5C4B5cS2kyHr1s~2yDNSEuQ150IX0~FMfwQtB8sqt3FcriqUUdnCNcXQp9pF5PHjTBpKfa4O4LpnwaPJQPwhnEQ__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: null,
    priceFixed: false,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 3,
    name: "Jakob Torff",
    image:
      "https://s3-alpha-sig.figma.com/img/9a3a/aff5/bf14d1a3636fe7c3b07101be4a0d723e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KG7ZbZE3e4s0jq3ed9rZaPyTfFo5j38YFXMY442pGDvH6dVJdlgpe4WbTwX5elJLRYGUQqOaqVYs0jIi2vcZt8E5oXLAaUp~Um1xlivnfa~ma24g9aiUgsRLYAYaoa9t9TzBjxvsaZu2cXRTUd6PNVnWqBPtGFiugBZUwrBcp6Mz0gAqa7ZsnbxX8~fRdi9ujDDOISwe7vYuOwbC47MICBBUDwrOadNcb3tMkhy41thfy-M1Ar0UuXfzutZmIOWlWsZ84yuBmqEuDBNfspYKZJgZoTRfUDRTSVY6ZXze~QTfFS~hiuN~M~dxauO0XRiKmjooArLqBZ9UADL7Rgi7~g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 4.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 4,
    name: "Cooper George",
    image:
      "https://s3-alpha-sig.figma.com/img/c513/895d/aad8c9b0044f92aa382ca949e42b00bf?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RJYz6mbIV1E5CwpRqePya05W84LtX~pQXVr1Re5ywaQCLfGWNUxj2VUZ-JKIeZe3OXOdqMqzRXJzFIXU13Ak2g-OuQtyuHpIBKMUOEuXriCfKZsLQQNz-x4U~5~4v7LY35h-aJthvb1ercycq8Lgp18Pz-Z8nPW1W7WODLnebU2y-bsK6vPkHOHdIY-5B-0N6U3CY0~TdOcGKRlAo8fLq8lAb4qtqkf7~QTOvFLwjxiOYIN21HON0~-UMf8TIlomHy5EkfPrpgdZp8JKfL~BOi3cnDYePzMQXT619J4PkYsZQAf6ZQV~M2FG7yY~zlwysxA~FIPK4fFwSpZqagJ82g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 5,
    name: "Emerson Rhiel Madsen",
    image:
      "https://s3-alpha-sig.figma.com/img/06f8/ffd2/8860ece6968355ec502c7afe0b216096?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWofRPrKrq0VhAagXGWYrizuYpk3ZTs7~K68-zSUba~sfODwbbEagBcH6SEh1jM1KKxITe-jNodO0HJhVeaVLn0ePLLjdbPciKJmP3t7Er23B~4x5EwHfTXHMlLAh0J3UPRUeu0v8yyAGmxvP1H~Q-ZlnwcRxqZzzihZKDlOB4REX-oSFo2i0VpdoK~3T6LVCRYkCLEcLrohkz7EzRDtGP7gHAGSSkloSLI4ka~UxUfuBiTYaImA~tURTcX~bIZjiDcKcKR1PoFnHOWtNH-OIjla9q2lmiOpLlZr6E3Y~0OSG-F8u3fDYDwBtaU6WxdIMFFUQcF4ARMFobqzUbvOxA__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 6,
    name: "Parvipan Deep S.",
    image:
      "https://s3-alpha-sig.figma.com/img/8b9f/9ccd/5acdca558657f53c10bd154375cdf1e5?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=rKpcONUGlF3gNzYBjuPQVS0k8RrPDxoLoESpA6S3eWARoqs9n1FmPBWBdIVGP~CXzicz3Gr9Ux4R6jC~bRxGGNpnQaS0SVplBWrMB-Eqt4my-uUZcw5Pu4GfqWcSqipj7a7c0cHYJ3IAw0sHSAIVl3TPWHi4Y6zudqBC0Jai9Dp-Di09jyw7xhKv1AqvfrteS6vDW21~jWsa1Kq5--xYoqDLce8W~S-x7huhjAtngfhh7VC7dZl~udo9YyLjbl-5C4B5cS2kyHr1s~2yDNSEuQ150IX0~FMfwQtB8sqt3FcriqUUdnCNcXQp9pF5PHjTBpKfa4O4LpnwaPJQPwhnEQ__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: "popular",
  },
  {
    id: 7,
    name: "Aspen Stanton",
    image:
      "https://s3-alpha-sig.figma.com/img/9a3a/aff5/bf14d1a3636fe7c3b07101be4a0d723e?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KG7ZbZE3e4s0jq3ed9rZaPyTfFo5j38YFXMY442pGDvH6dVJdlgpe4WbTwX5elJLRYGUQqOaqVYs0jIi2vcZt8E5oXLAaUp~Um1xlivnfa~ma24g9aiUgsRLYAYaoa9t9TzBjxvsaZu2cXRTUd6PNVnWqBPtGFiugBZUwrBcp6Mz0gAqa7ZsnbxX8~fRdi9ujDDOISwe7vYuOwbC47MICBBUDwrOadNcb3tMkhy41thfy-M1Ar0UuXfzutZmIOWlWsZ84yuBmqEuDBNfspYKZJgZoTRfUDRTSVY6ZXze~QTfFS~hiuN~M~dxauO0XRiKmjooArLqBZ9UADL7Rgi7~g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: null,
    priceFixed: false,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 8,
    name: "Jakob Torff",
    image:
      "https://s3-alpha-sig.figma.com/img/44e5/7bc9/2bd383b9e21b73b16b552146fab33d6a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Pj~rLLYGuzoj2RLjwyAtU5oaZNjw8H~pDghDkavpLp4bgVxyEEhuMivHwiiIdMito0tBv2rOu-~oosghs6ZehCQoLIup-WYW~43upEjuO8QMV6C57DENcXqoVAMIhfLaGFgh1Ymni3qLbSKT3nABxs~3fGnO~EhibhEV8QjzcBNDqdmW6HcsvkR6DTg-nrw7XhqGkcWDkwBflAO8ZDH1swJPbzmCTO7z-li3oj0XC1WUDeT9NDXiRxmD7if0fyE4Z0PKPUty63cYBi0tJZePhgba7uwCHZwyVZXH3PNWS~s~7Hy3Rk-CLmN2hE~TIZ02dFrTNZo1BiYK0NNo31xw3A__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 4.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 9,
    name: "Cooper George",
    image:
      "https://s3-alpha-sig.figma.com/img/c513/895d/aad8c9b0044f92aa382ca949e42b00bf?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RJYz6mbIV1E5CwpRqePya05W84LtX~pQXVr1Re5ywaQCLfGWNUxj2VUZ-JKIeZe3OXOdqMqzRXJzFIXU13Ak2g-OuQtyuHpIBKMUOEuXriCfKZsLQQNz-x4U~5~4v7LY35h-aJthvb1ercycq8Lgp18Pz-Z8nPW1W7WODLnebU2y-bsK6vPkHOHdIY-5B-0N6U3CY0~TdOcGKRlAo8fLq8lAb4qtqkf7~QTOvFLwjxiOYIN21HON0~-UMf8TIlomHy5EkfPrpgdZp8JKfL~BOi3cnDYePzMQXT619J4PkYsZQAf6ZQV~M2FG7yY~zlwysxA~FIPK4fFwSpZqagJ82g__",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 200,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
  {
    id: 10,
    name: "Emerson Rhiel Madsen",
    image:
      "https://s3-alpha-sig.figma.com/img/06f8/ffd2/8860ece6968355ec502c7afe0b216096?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CWofRPrKrq0VhAagXGWYrizuYpk3ZTs7~K68-zSUba~sfODwbbEagBcH6SEh1jM1KKxITe-jNodO0HJhVeaVLn0ePLLjdbPciKJmP3t7Er23B~4x5EwHfTXHMlLAh0J3UPRUeu0v8yyAGmxvP1H~Q-ZlnwcRxqZzzihZKDlOB4REX-oSFo2i0VpdoK~3T6LVCRYkCLEcLrohkz7EzRDtGP7gHAGSSkloSLI4ka~UxUfuBiTYaImA~tURTcX~bIZjiDcKcKR1PoFnHOWtNH-OIjla9q2lmiOpLlZr6E3Y~0OSG-F8u3fDYDwBtaU6WxdIMFFUQcF4ARMFobqzUbvOxA_",
    verified: true,
    superTutor: true,
    yearsExperience: 10,
    rating: 5.0,
    reviews: 206,
    price: 90,
    priceFixed: true,
    degree: "Bachelor, Science",
    field: "Science",
    online: true,
    responseTime: "1 Days",
    completedAssignments: 31,
    plagiarismScore: 0,
    favorite: false,
    flag: null,
  },
];


export async function GET() {
  return NextResponse.json(experts);
}
