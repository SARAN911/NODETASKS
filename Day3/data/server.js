
import http from "http";
import fs from "fs";
import path from "path";
import url from "url";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const moviesFilePath = path.join(__dirname, "data", "movies.txt");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  res.setHeader("Content-Type", "text/html");

  if (pathname === "/" || pathname === "/home") {
    res.end(`<h1>Welcome to Leo Movie Booking</h1>
      <a href="/movies">Movies</a> |
      <a href="/booking?movie=Leo">Booking</a> |
      <a href="/contact">Contact</a>`);
  } 
  
  else if (pathname === "/movies") {
    fs.readFile(moviesFilePath, "utf8", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end("<h3>Error reading movies file.</h3>");
      } else {
        const movies = data.split("\n").filter(Boolean);
        res.write("<h1>Available Movies</h1><ul>");
        movies.forEach(movie => res.write(`<li>${movie}</li>`));
        res.write("</ul>");
        res.write(`<p><b>File path:</b> ${moviesFilePath}</p>`);
        res.end();
      }
    });
  } 
  
  else if (pathname === "/booking") {
    const movie = parsedUrl.query.movie;
    if (movie) {
      res.end(`<h1>Booking confirmed for: ${movie}</h1>
               <p>Thank you for booking with Leo Movies!</p>`);
    } else {
      res.end("<h3>No movie selected for booking.</h3>");
    }
  } 
  
  else if (pathname === "/contact") {
    res.end("<h1>Contact us at: leobooking@movies.com</h1>");
  } 
  
  else {
    res.statusCode = 404;
    res.end("<h3>Page Not Found</h3>");
  }
});

const port = 4000;
server.listen(port, () => {
  console.log(`🎬 Leo Movie Booking Server running at http://localhost:${port}`);
});
