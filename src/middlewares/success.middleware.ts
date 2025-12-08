import { Request, Response, NextFunction } from "express";

export const successMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Save original res.json function
    const sendJson = res.json.bind(res);

    // Override res.json
    res.json = (data: any) => {
        // If response is an error (status >= 400), do NOT wrap
        if (res.statusCode >= 400) {
            return sendJson(data);
        }

        // Standard API success response structure
        const payload = {
            success: true,
            data,
            timestamp: new Date().toISOString(),
            path: req.originalUrl
        };

        return sendJson(payload);
    };

    next();
};
