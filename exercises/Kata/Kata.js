import { Text, View, StyleSheet, Picker } from 'react-native';
import React, { useState } from 'react';
import { commonStyle, fontSize, color } from '../../commonStyles';

const ChessPiece = {
  Knight: 'Knight',
  Queen: 'Queen',
  Rook: 'Rook',
  Bishop: 'Bishop',
};

export default function Kata() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [piece, setPiece] = useState();
  const [kingPos] = useState({
    x: Math.floor(Math.random() * 8),
    y: Math.floor(Math.random() * 8),
  });
  const [inCheck, setInCheck] = useState(false);

  const updatePiece = (newPiece, newX, newY) => {
    console.log(newPiece, newX, newY);
    console.log('King', kingPos.x, kingPos.y);

    const bishopCondition =
      Math.abs(newX - kingPos.x) === Math.abs(newY - kingPos.y);

    const knightCondition =
      (Math.abs(newX - kingPos.x) === 2 && Math.abs(newY - kingPos.y) === 1) ||
      (Math.abs(newX - kingPos.x) === 1 && Math.abs(newY - kingPos.y) === 2);

    const rookCondition = newX === kingPos.x || newY === kingPos.y;

    const queenCondition = bishopCondition || rookCondition;

    if (
      (newPiece === ChessPiece.Bishop && bishopCondition) ||
      (newPiece === ChessPiece.Knight && knightCondition) ||
      (newPiece === ChessPiece.Rook && rookCondition) ||
      (newPiece === ChessPiece.Queen && queenCondition)
    ) {
      setInCheck(true);
    } else {
      setInCheck(false);
    }
  };

  const king = () => (
    <Text
      style={{ fontSize: '2rem', textAlign: 'center', lineHeight: '1.5rem' }}
    >
      ♚
    </Text>
  );
  const constructPiece = () => (
    <Text
      style={{ fontSize: '2rem', textAlign: 'center', lineHeight: '1.5rem' }}
    >
      {(() => {
        switch (piece) {
          case ChessPiece.Bishop:
            return '♗';
          case ChessPiece.Rook:
            return '♖';
          case ChessPiece.Knight:
            return '♘';
          case ChessPiece.Queen:
            return '♕';
        }
      })()}
    </Text>
  );

  const constructCell = (cellX, cellY) => {
    let dark;
    if ((cellX + cellY) % 2) {
      dark = true;
    }
    const cell = (
      <View key={`${cellX},${cellY}`} style={dark ? styles.darkCell : null}>
        {(cellX === kingPos.x) & (cellY === kingPos.y) ? king() : null}
        {(() => {
          if (x !== kingPos.x || y !== kingPos.y) {
            if (x === cellX && y === cellY && piece) {
              return constructPiece();
            }
          }
        })()}
      </View>
    );
    if (cellX === 0) {
      return (
        <React.Fragment key={`${cellX},${cellY}`}>
          <Text>{cellY}</Text>
          {cell}
        </React.Fragment>
      );
    } else {
      return cell;
    }
  };

  const chessBoard = () => (
    <View
      style={{
        backgroundColor: 'white',
        display: 'grid',
        width: '18rem',
        height: '18rem',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
      }}
    >
      {(() => {
        const tempArray = [];
        for (let yIndex = 7; yIndex >= 0; yIndex--) {
          for (let xIndex = 0; xIndex <= 7; xIndex++) {
            tempArray.push(constructCell(xIndex, yIndex));
          }
        }
        return tempArray;
      })()}

      <View></View>
      <Text>0</Text>
      <Text>1</Text>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
      <Text>6</Text>
      <Text>7</Text>
    </View>
  );

  return (
    <View>
      {inCheck ? (
        <Text style={commonStyle.highlightedText}>CHECK!</Text>
      ) : (
        <Text style={commonStyle.highlightedText}>Not in check</Text>
      )}
      {chessBoard()}
      <Text style={commonStyle.text}>Select Piece: </Text>
      <Picker
        selectedValue={piece}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => {
          setPiece(itemValue);
          updatePiece(itemValue, x, y);
        }}
      >
        <Picker.Item label="" value={null} />
        <Picker.Item label={ChessPiece.Bishop} value={ChessPiece.Bishop} />
        <Picker.Item label={ChessPiece.Knight} value={ChessPiece.Knight} />
        <Picker.Item label={ChessPiece.Queen} value={ChessPiece.Queen} />
        <Picker.Item label={ChessPiece.Rook} value={ChessPiece.Rook} />
      </Picker>
      <Text style={commonStyle.text}>X: </Text>
      <Picker
        selectedValue={x}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => {
          setX(Number(itemValue));
          updatePiece(piece, Number(itemValue), y);
        }}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
      </Picker>
      <Text style={commonStyle.text}>Y: </Text>
      <Picker
        selectedValue={y}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue) => {
          setY(Number(itemValue));
          updatePiece(piece, x, Number(itemValue));
        }}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="7" value="7" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  darkCell: {
    backgroundColor: 'gray',
  },
});
