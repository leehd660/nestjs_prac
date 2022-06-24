//router를 하나 만들고
import { Router } from "express";
import {
    createCat,
    deleteCat,
    patchCat,
    readAllCat,
    readCat,
    updateCat,
} from "./cats.service";

const router = Router();

//* READ 고양이 전체 데이터 다 조회
router.get("/cats", readAllCat);

//* READ 특정 고양이 데이터 조회
//동적 라우팅
router.get("/cats/:id", readCat);

//* CREATE 새로운 고양이 추가 api
router.post("/cats", createCat);

//* UPDATE 고양이 데이터 업데이트 -> PUT
router.put("/cats/:id", updateCat);

//* UPDATE 고양이 데이터 부분적으로 업데이트 -> PATCH
router.patch("/cats/:id", patchCat);

//* DELETE 고양이 데이터 삭제 -> DELETE
router.delete("/cats/:id", deleteCat);

//만든 router를 export시켜준다
export default router;
