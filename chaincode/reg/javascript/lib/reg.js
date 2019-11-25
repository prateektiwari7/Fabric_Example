/*
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class Reg extends Contract {

    async initLedger(ctx) {
        const users = [
            {
                name:'Yuvi',
                phone:'1234567890',
                address:'hvasifbhviuh'
            },
            {
                name:'Yuvi1',
                phone:'9876541233',
                address:'dfhfsfgthdt'
            },
        ];

        for (let i = 0; i < users.length; i++) {
            users[i].docType = 'user';
            await ctx.stub.putState('USER' + i, Buffer.from(JSON.stringify(users[i])));
        }
    }

    async queryUser(ctx, userNumber) {
        const userAsBytes = await ctx.stub.getState(userNumber); 
        if (!userAsBytes || userAsBytes.length === 0) {
            throw new Error(`${userNumber} does not exist`);
        }
        console.log(userAsBytes.toString());
        return userAsBytes.toString();
    }

    async regUser(ctx, userNumber, name,phone,address) {

        const user = {
            name:name,
            docType: 'user',
            phone:phone,
            address:address
        };

        await ctx.stub.putState(userNumber, Buffer.from(JSON.stringify(user)));
        return user;
    }
}

module.exports = Reg;
