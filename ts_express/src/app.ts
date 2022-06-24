/* practice express code

// const express = require('express')
import * as express from "express";

// const app = express()
const app: express.Express = express();
//app : express의 인스턴스 -> 서버 역할을 한다.

const port: number = 8000;

app.use()

//이런걸 router라고 부른다
//http get방식을 통해 요청을 한다. "/":경로
//res.send로 응답을 준다
app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ name: "heedo", age: 25 });
});

app.post("/", function (req, res) {
  res.send({ hello: "world" });
});

//listen은 서버를 연다
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// import * as express from "express";

// const app: express.Express = express();

// const data = [1, 2, 3, 4];

// app.get("/", (req: express.Request, res: express.Response) => {
//   console.log(req);
//   res.send({ data });
// });

// app.listen(8000, () => {
//   console.log("server is on...");
// });

*/

// * Create Read
import * as express from "express";
//cats.route에서 export한 것을 import
import catRouter from "./cats/cats.route";

//싱글톤 패턴
class Server {
    public app: express.Application;

    constructor() {
        const app: express.Application = express();
        this.app = app;
    }

    private setRoute() {
        //router 분리를 하는 방법
        //연결하는 router들을 새로 인스턴스
        //cats.router 등록
        this.app.use(catRouter);
    }

    private setMiddleware() {
        // * logging middleware
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1]);
            console.log("this is logging middleware");
            next();
        });

        //* json middleware
        this.app.use(express.json());

        this.setRoute();

        //* 404 middleware
        this.app.use(function (req, res, next) {
            console.log("this is error middleware");
            res.send({ error: "404 not found" });
        });
    }

    public listen() {
        this.app.listen(8000, () => {});
    }
}

function init() {
    const server = new Server();
    server.listen();
}

init();

//싱글톤 인스턴스 여기서는 'app'이다. -> 전역으로 사용되는 인스턴스이기 때문에 다른 클래스의 인스턴스들이 접근하여 사용할 수 있음.
// const app: express.Express = express();
// const port: number = 8000;
