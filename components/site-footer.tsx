export function SiteFooter() {
  return (
    <footer className="w-full bg-[#3A3F33] px-5 pb-[150px] pt-[60px] text-white">
      <div className="mx-auto w-full max-w-[32rem]">
        <div className="mb-4 text-[18px] font-bold">(주) 비에스브랜더</div>

        <div className="text-[13px] leading-[1.8] text-white/80">
          대표 : 김지환 | 개인정보관리책임자 : 김지환
          <br />
          사업자등록번호 : 402-87-03145 | 통신판매 : 제 2024-서울동대문-1392 호
          <br />
          이메일 : sunsw.bwan@gmail.com | 대표번호 : 010-2527-5438
          <br />
          주소: 서울 영등포구 영신로 166, 1015
          <br />
          고객센터 :{" "}
          <a
            href="https://pf.kakao.com/_BZaEn/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
          >
            카카오톡 채널
          </a>
          <br />
          <br />
          <a
            href="https://www.instagram.com/knock_books/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            인스타그램
          </a>
        </div>

        <div className="mt-6 text-[12px] text-white/60">
          © 2025 BSBrander INC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
