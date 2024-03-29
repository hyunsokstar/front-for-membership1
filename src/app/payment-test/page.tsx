import { Box } from "@chakra-ui/react";

const PaymentTestPage = () => {
    const htmlContent = `
    <h2>결제하기</h2>
    <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
    <script>
        (function () {

            const IMP = window.IMP;
            const code = "iamport";
            IMP.init(code);

            const merchant_uid = "merchant_" + new Date().getTime();
            IMP.request_pay({
                merchant_uid: merchant_uid,
                name: "주문 테스트",
                amount: 100,
            }, function (response) {
                // 콜백함수
                console.log(response);
            });
        })();
    </script>
  `;

    return (
        <Box>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </Box>
    );
};

export default PaymentTestPage;
