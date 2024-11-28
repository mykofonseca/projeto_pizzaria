import { Request, Response } from "express";
import { ListOrdersService } from "../../services/order/ListOrdersService";

class ListOrdersController {
    async handle(req: Request, res: Response){
        const ListOrderService = new ListOrdersService();
        const orders = await ListOrderService.execute();
        res.json(orders);
    }
}

export { ListOrdersController }