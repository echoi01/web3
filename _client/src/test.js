// const rtm_bid_string = '(69.00, $22.83);(165.00, $35.38)';
const rtm_bid_string = '(1, $1.45);(517, $24.81);(517.1, $29.43);(550, $29.43)';

const auc = (miso_meter) => {
    const parseBidString = (bidString) => {
        return bidString.split(';').map((bid) => {
            return  bid.split(', ').map((val) => parseFloat(val.replace(/[()$]/g, "")));
        })
    }

    let index = 0;
    let total = 0;
    let lastBidMW;
    let curBidMw;
    let lastBidPrice;
    let curBidPrice;
    const useBidSlope = 1;
    const parsedBidString = parseBidString(rtm_bid_string);

    while (index < parsedBidString.length) {

        if (index === 0) {
            curBidMw = parsedBidString[index][0];
            curBidPrice =  parsedBidString[index][1];
            
            if (curBidMw > miso_meter) total = total + miso_meter * curBidPrice; 
            else total = total + curBidMw * curBidPrice;
            index ++;
        } else {
            lastBidPrice = curBidPrice;
            lastBidMW = curBidMw;

            curBidMw = parsedBidString[index][0];
            curBidPrice = parsedBidString[index][1];

            if (lastBidMW <= miso_meter) {
                let thisSegMW;
                let thisSegPrice;
                if (miso_meter > curBidMw) {
                    thisSegMW = curBidMw - lastBidMW;
                } else {
                    thisSegMW = miso_meter - lastBidMW;
                }

                if (useBidSlope === 0) {
                    thisSegPrice = curBidPrice;
                } else {
                    thisSegPrice = (lastBidPrice + (lastBidPrice + thisSegMW * (curBidPrice - lastBidPrice) / (curBidMw - lastBidMW))) / 2;
                }
                total = total + (thisSegMW * thisSegPrice);
            }
            index ++;
        }
    }
    if (miso_meter > curBidMw) {
        total = total + (miso_meter - curBidMw) * curBidPrice;
    }

    console.log(`miso meter: ${miso_meter}, total: ${total}`);
};

auc(513);
auc(513.59);



const auc2 = (miso_meter) => {
    const parseBidString2 = (bidString, dispatch) => {
        if (!bidString || !bidString.length) return [[0, 0], [0, 0]];
        if (!bidString.includes(";")) return [parseFloat(bidString.split([","])[1].replace(/[()$]/g, ""))];
        const bidArr = bidString.split(";").map((temp2) => temp2.split(", ").map((temp3) => parseFloat(temp3.replace(/[()$]/g, ""))));
        let i = 0;
        while (bidArr[i] && (bidArr[i][0] < dispatch)) i++;
        if (i === 0) return [bidArr[i][1]];
        if (i === bidArr.length) return [bidArr[i - 1][1]];
        return [bidArr[i - 1], bidArr[i]];
    }

    if (rtm_bid_string?.length) {
        const [rtm_prev_bid, rtm_curr_bid] = parseBidString2(rtm_bid_string, miso_meter);
        const rtm_auc = rtm_curr_bid
            ? ((rtm_prev_bid[1] + (rtm_prev_bid[1] + ((miso_meter - rtm_prev_bid[0]) * (rtm_curr_bid[1] - rtm_prev_bid[1]) / (rtm_curr_bid[0] - rtm_prev_bid[0])))) / 2)
            : rtm_prev_bid;
        const rtm_gen_cost_auc = (miso_meter < 0) ? 0 : Math.max(rtm_auc, 0);
        // amounts.calc_miso_rtm_gen_cost_lmp = rtm_gen_cost_auc;
        // amounts.calc_miso_rtm_gen_cost_amt = rtm_gen_cost_auc * (miso_meter - dam_energy_mw) / -12;
        const total = rtm_gen_cost_auc * miso_meter;

        console.log(`miso meter auc2: ${miso_meter}, total: ${total}`);
    }
}

auc2(513);
auc2(513.59);