class WeatherData {
    constructor() {
        this.observers = new Array();
    }
    registerObserver(o) {
        this.observers.push(o);
    }
    removeObserver(o) {
        this.observers.splice(this.observers.indexOf(o), 1);
    }
    notifyObservers() {
        this.observers.forEach((observer) => {
            observer.update(this.temperature, this.humidity, this.pressure);
        });
    }
    measurementsChanged() {
        this.notifyObservers();
    }
    setMeasurements(temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.measurementsChanged();
    }
}
class CurrentConditionsDisplay {
    constructor(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    display() {
        console.log(`현재 상태: 온도 ${this.temperature}C, 습도 ${this.humidity}%`);
    }
    update(temp, humidity, pressure) {
        this.temperature = temp;
        this.humidity = humidity;
        this.display();
    }
}
const weatherData = new WeatherData();
const currentDisplay = new CurrentConditionsDisplay(weatherData);
weatherData.setMeasurements(80, 65, 30.4);
weatherData.setMeasurements(82, 70, 29.2);
weatherData.setMeasurements(78, 90, 29.3);
