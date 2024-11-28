import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
    async handle(req: Request, res: Response){
        const order_id = req.query.order_id as string;
        const detailOrdersService = new DetailOrderService();
        const orders = await detailOrdersService.execute({
            order_id
        });
        res.json(orders);
    }
}

export { DetailOrderController }