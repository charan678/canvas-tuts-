class Matrices {
    matrix: number[][] = [];
    nCols: number;
    nRows: number;


    constructor(nRow: number, nCols: number) {
        this.nRows;
        this.nCols = nCols;
        this.resetPixel();
    }

    resetPixel = () => {
        this.matrix  = new Array(this.nCols)
                                    .fill(0)
                                    .map(() => new Array(this.nRows)
                                    .fill(0));
    }

    

    render = () => {      
        for(let rindex=0;rindex<this.nRows ;rindex++) {
            for(let cindex=0;cindex<this.nCols ;cindex++) {
                console.log(`(${rindex},${cindex})= ${this.matrix[rindex][cindex]}`);
             }
        }
    }
}


export default Matrices;