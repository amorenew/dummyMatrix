import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';

export default class MatrixItem extends Component {

    render() {

        return (<table style={{ width: "100%" }}>
            {this.getMatrixRows()}
        </table>);
    }



    getMatrixRows = () => {
        const matrixRows = this.props.matrixRows;
        var rows = [];
        for (var i = 0; i < matrixRows; i++) {
            rows.push(<tr>{this.getMatrixColumns()}
            </tr>);
        }
        return rows;

    }
    getMatrixColumns = () => {
        const matrixCols = this.props.matrixCols;
        var rows = [];
        for (var i = 0; i < matrixCols; i++) {
            rows.push(<NumericInput className="form-control" style={false} />
            );
        }
        return rows;

    }
}

MatrixItem.propTypes = {
    matrixCols: PropTypes.number.isRequired,
    matrixRows: PropTypes.number.isRequired
}