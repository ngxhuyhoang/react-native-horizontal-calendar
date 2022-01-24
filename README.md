# rn-horizontal-calendar

horizontal calendar

## Installation

```sh
npm install --save rn-horizontal-calendar
```

or

```sh
yarn add rn-horizontal-calendar
```

## Usage

```jsx
const [selectedDate, setSelectedDate] = useState(new Date());

<HorizontalCalendar
  selectedDate={selectedDate}
  setSelectedDate={(date) => {
    setSelectedDate(date);
  }}
/>;
```

## Props

| Props           | Description                                          | Required | Default |
| --------------- | ---------------------------------------------------- | -------- | ------- |
| selectedDate    | return selectedDate                                  | true     |         |
| setSelectedDate | get active date                                      | true     |         |
| dateRange       | show date from today to number of days in the future | false    | 365     |
| renderItem      | render custom date item                              | false    | null    |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
