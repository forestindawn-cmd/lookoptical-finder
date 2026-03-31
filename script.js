// ── 얼굴형별 데이터 ──
const FACE_DATA = {
  oval: {
    label: 'OVAL · 계란형',
    heading: '계란형 — 모든 프레임이 어울리는 황금 비율',
    desc: '이마와 턱선이 균형 잡힌 이상적인 얼굴형입니다. 특별한 제약 없이 대부분의 프레임이 잘 어울리지만, 얼굴의 아름다운 곡선을 살리는 스타일을 선택하면 더욱 완성도 높은 룩을 연출할 수 있습니다.',
    frames: [
      { icon: '🟤', name: '오버사이즈 스퀘어', why: '강한 선이 균형감을 강조. 럭셔리한 존재감 연출' },
      { icon: '⭕', name: '라운드 · 서클', why: '얼굴의 부드러운 곡선과 조화. 빈티지한 지적 분위기' },
      { icon: '😎', name: '캣아이', why: '위로 올라간 라인이 얼굴을 리프팅. 패셔너블한 강세' },
      { icon: '🔲', name: '클래식 사각', why: '타임리스한 클래식. 계란형에 가장 범용성 높은 선택' },
    ],
    avoid: '얼굴과 유사한 크기의 매우 작은 프레임 — 비율감이 깨질 수 있습니다.',
    brands: [
      { name: 'DIOR', model: 'DiorSignature · DiorBlackSuit', reason: '아이코닉한 캣아이와 오버사이즈 실루엣. 계란형의 완성도를 극대화', tag: '40대 추천' },
      { name: 'CELINE', model: 'Triomphe · CL40194U', reason: '둥글고 각진 라인의 밸런스. Triomphe 로고가 스타일 포인트', tag: '30-40대' },
      { name: 'FENDI', model: 'FF0472 · Baguette', reason: 'FF 더블F 오버사이즈로 존재감 강조. Gen-Z 무드', tag: '20대 추천' },
      { name: 'FERRAGAMO', model: 'SF300S · SF929S', reason: '우아한 골드 디테일과 정제된 실루엣. 클래식 완성', tag: '50대+ 추천' },
    ]
  },

  round: {
    label: 'ROUND · 둥근형',
    heading: '둥근형 — 각진 프레임으로 날렵한 대비를',
    desc: '부드럽고 친근한 인상의 둥근형은 각지거나 직선적인 프레임이 얼굴에 날렵함과 세련된 대비를 만들어줍니다. 수평으로 넓은 프레임은 피하고, 브릿지가 높은 스타일로 얼굴에 길이감을 더하세요.',
    frames: [
      { icon: '🔲', name: '스퀘어 · 렉탱글', why: '각진 선이 얼굴 곡선과 대비. 날렵하고 성숙한 인상' },
      { icon: '🔷', name: '웨이파러 · D자형', why: '상단 직선 + 하단 곡선의 균형. 대중적이면서도 세련됨' },
      { icon: '📐', name: '지오메트릭', why: '기하학적 형태로 얼굴에 구조감 추가. 개성 표현' },
      { icon: '➖', name: '브릿지 높은 스타일', why: '코 브릿지가 높으면 얼굴이 길어 보이는 착시 효과' },
    ],
    avoid: '완전한 원형 · 오벌형 프레임 — 둥근 얼굴의 곡선을 더욱 강조해 얼굴이 더 커 보일 수 있습니다.',
    brands: [
      { name: 'PAUL SMITH', model: 'PS By PS · Smith Rectangle', reason: '영국 감성의 클래식 스퀘어. 컬러 디테일로 개성 살리기', tag: '30-40대' },
      { name: 'SANDRO', model: 'SM6007 · Paris Edit', reason: '파리지앵 미니멀 웨이파러. 가볍고 세련된 일상 스타일', tag: '20-30대' },
      { name: 'CELINE', model: 'CL40240U · Black Frame', reason: '오버사이즈 사각 실루엣. 둥근형에 강한 대비와 파워 부여', tag: '40대 추천' },
      { name: 'DIOR', model: 'DiorInDior · Geometric', reason: '기하학적 라인으로 얼굴에 구조감. 럭셔리 엣지 표현', tag: '30-40대' },
    ]
  },

  square: {
    label: 'SQUARE · 각진형',
    heading: '각진형 — 곡선 프레임으로 부드러운 조화',
    desc: '강하고 뚜렷한 턱선과 이마가 특징인 각진형은 둥글고 부드러운 프레임이 얼굴의 직선을 완화시켜 균형 잡힌 인상을 만들어줍니다. 작고 각진 프레임보다 크고 부드러운 실루엣을 선택하세요.',
    frames: [
      { icon: '⭕', name: '라운드 · 서클', why: '부드러운 곡선이 각진 턱선을 중화. 친근하고 세련된 균형' },
      { icon: '🥚', name: '오벌 · 에그형', why: '타원형이 얼굴 라인을 부드럽게 감싸. 자연스러운 조화' },
      { icon: '😎', name: '캣아이', why: '위로 뻗은 포인트가 시선을 위로 유도. 여성스러운 대비' },
      { icon: '🔵', name: '오버사이즈 라운드', why: '큰 프레임이 각진 라인을 커버. 트렌디한 럭셔리 무드' },
    ],
    avoid: '작고 각진 사각 프레임 · 직선형 렉탱글 — 각진 얼굴형의 강한 라인을 더욱 부각시킵니다.',
    brands: [
      { name: 'CELINE', model: 'Triomphe Round · CL40236U', reason: '둥근 Triomphe 실루엣. 각진형에 가장 이상적인 소프트 밸런스', tag: '40대 추천' },
      { name: 'DIOR', model: 'DiorSoStellaire · Round', reason: '클래식 라운드에 Dior 럭셔리함. 각진 얼굴을 우아하게 중화', tag: '30-40대' },
      { name: 'FENDI', model: 'FF0432S · Oval Frame', reason: '오벌 형태의 FF 로고 디테일. 트렌디하면서 얼굴과 조화', tag: '20-30대' },
      { name: 'FERRAGAMO', model: 'SF1082S · Round Gold', reason: '골드 라운드 프레임. 각진 얼굴에 클래식한 우아함 더하기', tag: '50대+ 추천' },
    ]
  },

  heart: {
    label: 'HEART · 하트형',
    heading: '하트형 — 하단 강조로 시선의 균형을',
    desc: '이마가 넓고 턱선이 좁은 하트형은 아래쪽이 강조되는 프레임으로 시선의 균형을 맞추는 것이 핵심입니다. 하단 테두리가 두껍거나 컬러가 있는 스타일, 또는 리무리스 스타일이 이상적입니다.',
    frames: [
      { icon: '🔻', name: '보텀 헤비 프레임', why: '아래쪽 테두리가 두꺼운 스타일로 좁은 턱선을 시각적으로 보완' },
      { icon: '🔮', name: '라운드 오버사이즈', why: '부드럽고 큰 렌즈로 이마-턱의 너비 차이를 완화' },
      { icon: '〰️', name: '리무리스 · 하프림', why: '가벼운 인상으로 넓은 이마를 강조하지 않음. 지적인 분위기' },
      { icon: '💎', name: '라이트 컬러 프레임', why: '파스텔·투명 프레임으로 얼굴 전체 밸런스 자연스럽게 조화' },
    ],
    avoid: '무거운 탑 헤비 프레임 · 상단이 강조된 캣아이 — 이미 넓은 이마를 더욱 강조해 비율이 불균형해집니다.',
    brands: [
      { name: 'SANDRO', model: 'SM6012 · Light Frame', reason: '가벼운 메탈 리무리스. 하트형 얼굴의 이상적인 밸런스 연출', tag: '20-30대' },
      { name: 'PAUL SMITH', model: 'PS Big D · Half Rim', reason: '영국 클래식 하프림. 지적이고 세련된 이미지로 균형 완성', tag: '30-40대' },
      { name: 'FERRAGAMO', model: 'SF856S · Rimless', reason: '우아한 리무리스 디자인. 하트형에 가장 정제된 럭셔리 선택', tag: '50대 추천' },
      { name: 'CELINE', model: 'CL40195 · Transparent', reason: '투명·라이트 컬러 오벌. 넓은 이마를 자연스럽게 중화', tag: '30-40대' },
    ]
  },

  oblong: {
    label: 'OBLONG · 긴형',
    heading: '긴형 — 가로폭 강조로 균형감 확보',
    desc: '얼굴 길이가 너비보다 긴 긴형은 가로로 넓은 프레임이 얼굴에 넓이감을 더해 균형을 만들어줍니다. 데코레이션이 있는 사이드 테두리나 넓은 브릿지, 오버사이즈 스타일이 효과적입니다.',
    frames: [
      { icon: '🟫', name: '오버사이즈 와이드', why: '가로로 넓은 프레임이 긴 얼굴에 넓이감을 부여. 비율 균형' },
      { icon: '🔲', name: '스퀘어 · 렉탱글', why: '각진 형태가 얼굴 길이를 시각적으로 단축시키는 효과' },
      { icon: '🌀', name: '장식적 템플 스타일', why: '사이드 장식이 시선을 옆으로 분산. 얼굴에 넓이감 추가' },
      { icon: '🌸', name: '나비형 · 버터플라이', why: '위로 퍼지는 형태가 얼굴 넓이를 확장. 드라마틱한 효과' },
    ],
    avoid: '매우 좁고 작은 렌즈 · 세로로 긴 타원형 — 얼굴 길이를 더욱 강조하여 비율이 더 길어 보입니다.',
    brands: [
      { name: 'DIOR', model: 'DiorBlackSuit · Wide', reason: '와이드 오버사이즈 실루엣. 긴형 얼굴에 드라마틱한 존재감', tag: '30-40대 추천' },
      { name: 'FENDI', model: 'FF0480S · Oversized', reason: '오버사이즈 FF 스퀘어. 넓이감 확보 + Gen-Z 트렌드 완성', tag: '20대 추천' },
      { name: 'CELINE', model: 'CL40245U · Bold Frame', reason: '두꺼운 프레임으로 강한 넓이감. 파워풀한 럭셔리 스타일링', tag: '40대 추천' },
      { name: 'PAUL SMITH', model: 'PS Oversized · Temple Detail', reason: '컬러 템플 디테일로 시선 분산. 긴형에 위트 있는 개성 추가', tag: '30대 추천' },
    ]
  },

  diamond: {
    label: 'DIAMOND · 다이아형',
    heading: '다이아형 — 광대뼈를 보완하는 부드러운 실루엣',
    desc: '이마와 턱이 좁고 광대뼈가 가장 넓은 다이아형은 이마와 턱선을 시각적으로 넓혀주는 스타일이 핵심입니다. 상단이 강조된 캣아이나 넓은 브릿지 스타일이 얼굴 전체 균형을 맞춰줍니다.',
    frames: [
      { icon: '😎', name: '캣아이 · 업스위프트', why: '위로 올라간 라인이 이마를 시각적으로 넓혀주는 효과' },
      { icon: '🔳', name: '오버사이즈 스퀘어', why: '넓은 상단 프레임이 좁은 이마와 턱을 보완. 시선 분산' },
      { icon: '👁️', name: '브로우 라인 · 상단 강조', why: '진한 상단 라인으로 이마 부분에 포인트. 자연스러운 균형' },
      { icon: '💠', name: '오벌 · 부드러운 곡선', why: '광대뼈의 각진 부분을 부드럽게 커버. 우아한 조화' },
    ],
    avoid: '협소한 프레임 · 이마와 너비가 같은 스타일 — 좁은 이마를 더욱 부각시켜 광대뼈가 더 돌출되어 보입니다.',
    brands: [
      { name: 'DIOR', model: 'DiorSignature · Cat Eye', reason: '아이코닉 캣아이로 이마 라인 강조. 다이아형의 이상적 선택', tag: '40대 추천' },
      { name: 'CELINE', model: 'CL40196 · Brow Line', reason: '브로우 라인 스타일로 상단 강조. 세련된 파리지앵 무드', tag: '30-40대' },
      { name: 'FENDI', model: 'FF0419S · Baguette Cat', reason: 'FF 캣아이 디테일. 광대뼈를 자연스럽게 커버하면서 트렌디', tag: '20-30대' },
      { name: 'FERRAGAMO', model: 'SF282S · Oversized', reason: '오버사이즈 클래식 프레임. 다이아형에 우아한 럭셔리 균형', tag: '50대+ 추천' },
    ]
  }
};

// ── 선택 함수 ──
function selectFace(face, btn) {
  // 버튼 active 상태
  document.querySelectorAll('.face-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const data = FACE_DATA[face];
  if (!data) return;

  // 텍스트 채우기
  document.getElementById('resultEyebrow').textContent = data.label;
  document.getElementById('resultHeading').textContent = data.heading;
  document.getElementById('resultDesc').textContent = data.desc;
  document.getElementById('avoidText').textContent = data.avoid;

  // 프레임 리스트
  const framesList = document.getElementById('framesList');
  framesList.innerHTML = data.frames.map(f => `
    <div class="frame-item">
      <div class="frame-icon">${f.icon}</div>
      <div class="frame-info">
        <div class="frame-name">${f.name}</div>
        <div class="frame-why">${f.why}</div>
      </div>
    </div>
  `).join('');

  // 브랜드 카드
  const brandGrid = document.getElementById('brandGrid');
  brandGrid.innerHTML = data.brands.map(b => `
    <div class="brand-card">
      <div class="brand-name">${b.name}</div>
      <div class="brand-model">${b.model}</div>
      <div class="brand-reason">${b.reason}</div>
      <span class="brand-tag">${b.tag}</span>
    </div>
  `).join('');

  // 결과 패널 표시
  const panel = document.getElementById('resultSection');
  panel.classList.remove('visible');
  // reflow 후 다시 추가해서 애니메이션 재실행
  void panel.offsetWidth;
  panel.classList.add('visible');

  // 스크롤
  setTimeout(() => {
    panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 50);
}

// ── 리셋 ──
function resetAll() {
  document.querySelectorAll('.face-btn').forEach(b => b.classList.remove('active'));
  const panel = document.getElementById('resultSection');
  panel.classList.remove('visible');
  document.querySelector('.selector-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
