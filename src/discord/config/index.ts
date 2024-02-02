import { config } from "dotenv"
import CheckRequiredValueAndReturn from "../utils/CheckRequiredValueAndReturn";
config();

export default {
	"token": CheckRequiredValueAndReturn('DISCORD_TOKEN', process.env.DISCORD_TOKEN)
}