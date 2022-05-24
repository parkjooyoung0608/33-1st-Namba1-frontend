import React, { useEffect, useState } from 'react';

const ReviewAdd = () => {
  const [menu, setMenu] = useState([
    {
      id: '',
      menuName: '',
    },
  ]);

  useEffect(() => {
    fetch('data/menu.json')
      .then(res => res.json())
      .then(data => {
        setMenu(data);
      });
  }, []);

  return (
    <section className="revieWrite">
      <div className="reviewWriteWarp">
        <h3 className="reviewWriteHead">리뷰 쓰기</h3>
        <select name="상품선택">
          {menu.map(menu => (
            <option key={menu.id}>{menu.menuName}</option>
          ))}
        </select>
        <form className="reviewWriteForm">
          <p className="reviewFileTitle">사진 첨부 (선택)</p>
          <p className="reviewFileDesc">
            오늘의집에 올렸던 사진에서 고르거나 새로운 사진을 첨부해주세요.
            (최대 1장)
          </p>

          <div className="reviewFileUplode">
            <label className="reviewFileUplodeTitle">사진 첨부하기</label>
            <input className="reviewFileUplodeInput" type="file" />
          </div>

          <div className="review">
            <label className="userReviewWrite">리뷰 작성</label>
            <textarea
              placeholder="자세하고 솔직한 리뷰는 다른 고객에게 큰 도움이 됩니다 (최소 20자 이상)"
              required
              maxLenth="200"
              minLength="20"
            />
          </div>

          <button className="reviewSubmitBtn">완료</button>
        </form>

        <details>
          <summary>Namba1 리뷰 정책</summary>
          <div class="detailsDesc">
            <span className="detail">
              포인트는 최초 작성한 리뷰를 기준으로 지급됩니다.
            </span>
            <br />
            <span className="detail">
              상품과 무관한 내용이나 사진, 동일 문자 반복 등의 부적합한 리뷰는
              사전 경고 없이 삭제 및 포인트 회수될 수 있습니다.
            </span>
            <br />
            <span className="detail">
              다음과 같은 리뷰의 경우 블라인드 및 통보 없이 삭제 될 수 있으며,
              서비스 이용 약관 제 14조에 따라 처벌 받을 수 있습니다.
            </span>
            <br />
            <span className="detail">
              1. 리뷰를 작성하는 조건으로 금전적 또는 물질적 대가를 제공받은
              경우
            </span>
            <br />
            <span className="detail">
              2. 리뷰의 대상 업체 또는 경쟁업체의 관계자이거나 해당 업체와
              개인적/사업적으로 관련 있는 경우
            </span>
            <br />
            <span className="detail">
              3. 해당 상품에 대한 허위의 내용을 작성한 경우
            </span>
            <span className="detail">
              <br />
              4. 욕설, 비난 등 업체나 타인에게 불쾌한 내용을 작성한 경우
            </span>
          </div>
        </details>
      </div>
    </section>
  );
};

export default ReviewAdd;