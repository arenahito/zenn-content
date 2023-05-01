import { format } from "date-fns";
import crypto from "crypto";

const d = format(new Date(), "yyyyMMdd");
const rnd = crypto.randomBytes(7).toString("hex");

console.log(`${d}-${rnd}`);
