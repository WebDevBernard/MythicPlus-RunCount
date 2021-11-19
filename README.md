## Demo

### [View Live Demo](https://mythicdungeons.vercel.app/)

- This data is taken from week 20 onwards, therefore is not accurate at the moment.

## About

- An app that models player engagement data in World of Warcraft Mythic + Dungeons.

- This app is partially automated using AWS Lambda and CloudWatch events. It only needs to be updated at the start of each season. The data comes from Raider.io API, but a database is required to make this data useful.

- [This Reddit post explains what information is being extracted.](https://www.reddit.com/r/wow/comments/o5nocw/comment/h2ov91n/?utm_source=share&utm_medium=web2x&context=3)

### How does it work?

- CloudWatch schedules AWS Lambda to make a weekly fetch request to Raider.io API
- AWS Lambda writes that data to DynamoDB.
- Front end retrieves data from a Lambda read function connected to API Gateway

### Example of database file

```
{
 "date": "2021-11-18T15:11:54PST",
 "week": 20,
 "season": 2,
 "affix": {
  "1": 589720,
  "2": 1562120,
  "3": 1677500,
  "4": 1318340,
  "5": 1225220,
  "6": 1258240,
  "7": 1162200,
  "8": 1395720,
  "9": 843960,
  "10": 671400,
  "11": 549420,
  "12": 574420
 }
}
```