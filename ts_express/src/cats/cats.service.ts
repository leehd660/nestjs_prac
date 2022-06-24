import { Request, Response } from "express";
import { Cat, CatType } from "./cats.model";

//* READ 고양이 전체 데이터 다 조회
export const readAllCat = (req: Request, res: Response) => {
    try {
        const cats = Cat;
        // throw Error("db connect error");
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

//* READ 특정 고양이 데이터 조회
export const readCat = (req: Request, res: Response) => {
    try {
        //path에 :id처럼 :를 붙이면 파라미터가 됨.
        //그리고 그런 파라미터는 req.params로 req에 저장되어 요청됨.
        //클라이언트는 유저가 로그인을 하면 세션이나 쿠키, JWT 형식으로 저장이 된다. 여기에 주로 id값을 저장하는데 이를 이용해서 클라이언트가 요청을 한다.
        const params = req.params;
        console.log(req.params);
        const cats = Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

//* CREATE 새로운 고양이 추가 api
export const createCat = (req: Request, res: Response) => {
    try {
        //express에서 json을 읽을 수 있도록 middleware를 추가해줘야 함
        const data = req.body;
        console.log(data);
        Cat.push(data); // create
        res.status(200).send({
            success: true,
            data: { data },
        });
    } catch (error: any) {
        res.status(400).send({
            success: true,
            error: error.message,
        });
    }
};

//* UPDATE 고양이 데이터 업데이트 -> PUT
export const updateCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: {
                cat: result,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
export const patchCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                //구조분해 할당으로 부분적으로 업데이트
                cat = { ...cat, ...body };
                result = cat;
            }
        });

        res.status(200).send({
            success: true,
            data: {
                cat: result,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};

//* DELETE 고양이 데이터 삭제 -> DELETE
export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => cat.id !== params.id);
        res.status(200).send({
            success: true,
            data: newCat,
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
