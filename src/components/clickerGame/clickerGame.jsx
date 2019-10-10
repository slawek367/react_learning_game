/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unused-state */
import React from 'react';
import { Card, Button, List, Divider } from 'antd';

class Character  {
    nickname = 'Nick'

    lvl = 1;

    exp = 0;

    money = 0;
}

const getBuild = (name, cost, playerLvl, gainBonus) => {
    return {
        name,
        lvl: 0,
        cost,
        playerLvl,
        gainBonus,
    };
};

const getBuildings = () => [
    getBuild('zozole', 2, 1, 0.5),
    getBuild('chipsy', 100, 5, 1 ),
    getBuild('piwo', 1000, 10, 2 ),
    getBuild('wodka', 10000, 15, 4 ),
    getBuild('whisky', 100000, 20, 7 ),
];


class Game extends React.Component {

    moneyMultiplierInterval = 1;

    moneyMultiplierClick = 1;

    moneyInterval = setInterval(() => this.increaseMoney(), 1000)

    state = {
        character: new Character(),
        buildings: getBuildings(),
    }

    increaseExp = (value) => {
        const { character } = this.state;
        character.exp += value;
        if (character.exp >= 100 * character.lvl) {
            character.lvl += 1;
            character.exp = 0;
        }
        this.setState({
            character,
        });
    }

    getBuildingMultiplier = () => {
        const { buildings } = this.state;
        let multi = 1;
        buildings.forEach(build => {
            multi += build.lvl * build.gainBonus * 10;
        });
        return multi;
    };

    increaseMoney = (money) => {
        const { character } = this.state;
        character.money += (money || this.moneyMultiplierInterval) * this.getBuildingMultiplier();
        this.setState({
            character,
        });
    }

    upgradeBuilding = (name) => {
        const { buildings, character } = this.state;
        const b = buildings.find(build => build.name === name);

        if (b.cost <= character.money) {
            character.money -= b.cost;
            b.lvl += 1;
            b.cost += b.cost * 1.01;
            this.setState({
                buildings,
                character,
            });
            this.increaseExp(b.playerLvl * 10);
        }
    }

    render() {
        const { character, buildings } = this.state;
        return (
            <div style={styles.body}>
                <Card
                    title={character.nickname}
                    style={styles.card}
                >
                    <p>Lvl: {character.lvl}</p>
                    <p>Exp: {character.exp} / {100 * character.lvl}</p>
                    <p>Money: {character.money}</p>
                    <p>Money per sec: {this.getBuildingMultiplier()}</p>
                </Card>
                <div>
                    <Button onClick={() => this.increaseMoney(1 * this.moneyMultiplierClick)}>
                        Gain money!
                    </Button>
                </div>
                <List
                    style={styles.buildingList}
                    header={<div>Items (name / lvl / cost / reqLvl / gainBonus)</div>}
                    bordered={true}
                    dataSource={buildings}
                    renderItem={item => (
                        <List.Item style={styles.listItem}>
                            {item.name} <Divider type='vertical'/>
                            {item.lvl} <Divider type='vertical'/>
                            {item.cost} <Divider type='vertical'/>
                            {item.playerLvl} <Divider type='vertical'/>
                            {item.gainBonus} <Divider type='vertical'/>
                            <Button
                                onClick={() => this.upgradeBuilding(item.name)}
                            >
                                Upgrade
                            </Button>
                        </List.Item>
                    )}
                />
            </div>
        );
    }
}

const styles = {
    body: {
        width: '100%',
        height: '100vh',
        textAlign: 'center',
    },
    card: {
        width: '300px',
        margin: 'auto',
    },
    buildingList: {
        width: '400px',
        margin: 'auto',
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-around',
    },
};

export default Game;