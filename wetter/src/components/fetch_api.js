const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

async function fetch_api(search) {
    try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${search}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(response.status); // Throw HTTP status code as an error
        }

        const data = await response.json();
        
        // Fix icon URLs to use HTTPS
        if (data.current && data.current.condition && data.current.condition.icon) {
            data.current.condition.icon = data.current.condition.icon.startsWith('//')
                ? `https:${data.current.condition.icon}`
                : data.current.condition.icon;
        }
        
        // Fix forecast icon URLs
        if (data.forecast && data.forecast.forecastday) {
            data.forecast.forecastday.forEach(day => {
                if (day.day && day.day.condition && day.day.condition.icon) {
                    day.day.condition.icon = day.day.condition.icon.startsWith('//')
                        ? `https:${day.day.condition.icon}`
                        : day.day.condition.icon;
                }
                if (day.hour) {
                    day.hour.forEach(hour => {
                        if (hour.condition && hour.condition.icon) {
                            hour.condition.icon = hour.condition.icon.startsWith('//')
                                ? `https:${hour.condition.icon}`
                                : hour.condition.icon;
                        }
                    });
                }
            });
        }

        return data; // Return the modified data
    } catch (error) {
        if (error.message === "400" || error.message === "404") {
            throw new Error("** Please Enter a Valid City Name");
        }
        if (error.message === "401" || error.message === "403") {
            throw new Error("** API Key Error. Please check your API key.");
        }
        throw new Error("** An unexpected error occurred. Please try again.");
    }
}

export default fetch_api;
