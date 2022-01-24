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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
