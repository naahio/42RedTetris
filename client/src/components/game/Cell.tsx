import { CellOptions } from "../../interfaces/types";

interface Props {
    type: CellOptions;
}

function Cell({type}: Props) {
    return (
        <div className={`cell ${type}`} />
    )
}

export default Cell;