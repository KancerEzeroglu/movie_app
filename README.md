# movie_app

# Instructions to run the project

1. Clone project into your local machine, ( or use the zip)
2. You will find a simple movie app that you can search for films from UI.
3. if you want you can use docker for run app:
```
docker run -d -p 8080:80 --mount type=bind,source="$(pwd)/chat-api",target=/var/www/html php:apache
``` 
4. Go to `localhost:3000`, you will see a login page
5. The films have been filtering with "love" keyword.
6. With auto-scroll pagination, you can see all filtered films (partial loading)
7. You can play a sample movie when clicking on an item in the list.
