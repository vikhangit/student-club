"use client"

import {
  ArrowRight,
  Lightbulb,
  Users,
  BookOpen,
  Target,
  Award,
  Zap,
  Heart,
  Sparkles,
  Flame,
  Brain,
  HandHeart,
} from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image src="/logo.png" alt="Student Startup Logo" width={48} height={48} className="w-10 h-10" />
              <span className="font-bold text-gray-900 text-base">Sinh viên Khởi nghiệp</span>
            </div>
            <div className="flex gap-8 items-center">
              <a href="#mission" className="text-sm hover:text-purple-600 transition">
                Sứ mệnh
              </a>
              <a href="#about" className="text-sm hover:text-purple-600 transition">
                5 Chữ Tâm
              </a>
              <a href="#models" className="text-sm hover:text-purple-600 transition">
                Mô hình
              </a>
              <a href="#benefits" className="text-sm hover:text-purple-600 transition">
                Quyền lợi
              </a>
              <a href="#journey" className="text-sm hover:text-purple-600 transition">
                Hành trình
              </a>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between">
            <Image src="/logo.png" alt="Student Startup Logo" width={40} height={40} className="w-8 h-8" />
            <div className="flex gap-3 text-xs overflow-x-auto">
              <a
                href="#mission"
                className="px-2 py-1 rounded bg-purple-50 text-purple-600 hover:bg-purple-100 transition whitespace-nowrap"
              >
                Sứ mệnh
              </a>
              <a
                href="#about"
                className="px-2 py-1 rounded bg-purple-50 text-purple-600 hover:bg-purple-100 transition whitespace-nowrap"
              >
                5 Chữ Tâm
              </a>
              <a
                href="#models"
                className="px-2 py-1 rounded bg-purple-50 text-purple-600 hover:bg-purple-100 transition whitespace-nowrap"
              >
                Mô hình
              </a>
              <a
                href="#benefits"
                className="px-2 py-1 rounded bg-purple-50 text-purple-600 hover:bg-purple-100 transition whitespace-nowrap"
              >
                Quyền lợi
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mission Section with Banner */}
      <section id="mission" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Mission Content */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance">
                  Sứ mệnh của chúng tôi
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4 sm:mb-6">
                  Hỗ trợ sinh viên khởi nghiệp trở thành doanh nhân thành công trên thị trường quốc tế
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-1 bg-gradient-to-b from-purple-600 to-orange-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Nâng tầm kỹ năng và tính sáng tạo
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Cung cấp công cụ, kiến thức và kinh nghiệm thực chiến
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-1 bg-gradient-to-b from-orange-500 to-red-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Phát huy tối đa năng số trường
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Giúp sinh viên khám phá và phát triển tiềm năng tối đa
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-1 bg-gradient-to-b from-red-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">
                        Giúp sinh viên khởi nghiệp thành công
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">Hỗ trợ toàn diện từ ý tưởng đến thực hiện</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-4 sm:pt-6">
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 bg-purple-600 text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-purple-700 hover:shadow-lg transition flex items-center justify-center gap-2 group">
                  Gia nhập ngay <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                <button className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold text-sm sm:text-base hover:bg-purple-50 transition">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>

            {/* Banner Image */}
            <div className="relative h-64 sm:h-80 md:h-full min-h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/banner-202-20clb-20sinh-20vien-202.jpeg"
                alt="Student Club Banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - 5 Chữ Tâm */}
      <section id="about" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            5 Chữ Tâm
          </h2>

          {/* 5 Chữ Tâm Cards - Compact Mobile Layout */}
          <div className="space-y-3 md:space-y-6 md:grid md:grid-cols-5 md:gap-4">
            {/* Tâm Sáng */}
            <div className="flex md:flex-col md:space-y-3 items-start md:items-center gap-3 p-3 md:p-6 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 md:from-blue-50 md:to-transparent border border-blue-200">
              <Lightbulb className="w-5 h-5 md:w-8 md:h-8 text-blue-600 flex-shrink-0" />
              <div className="md:text-center">
                <h3 className="font-bold text-blue-600 text-sm md:text-base">Tâm Sáng</h3>
                <p className="text-xs md:text-sm text-gray-600 md:mt-1">Tầm mục tiêu cao</p>
              </div>
            </div>

            {/* Tâm Huyết */}
            <div className="flex md:flex-col md:space-y-3 items-start md:items-center gap-3 p-3 md:p-6 rounded-lg bg-gradient-to-br from-red-50 to-red-100 md:from-red-50 md:to-transparent border border-red-200">
              <Flame className="w-5 h-5 md:w-8 md:h-8 text-red-600 flex-shrink-0" />
              <div className="md:text-center">
                <h3 className="font-bold text-red-600 text-sm md:text-base">Tâm Huyết</h3>
                <p className="text-xs md:text-sm text-gray-600 md:mt-1">Khát vọng, đam mê</p>
              </div>
            </div>

            {/* Tâm Khỏe */}
            <div className="flex md:flex-col md:space-y-3 items-start md:items-center gap-3 p-3 md:p-6 rounded-lg bg-gradient-to-br from-green-50 to-green-100 md:from-green-50 md:to-transparent border border-green-200">
              <Heart className="w-5 h-5 md:w-8 md:h-8 text-green-600 flex-shrink-0" />
              <div className="md:text-center">
                <h3 className="font-bold text-green-600 text-sm md:text-base">Tâm Khỏe</h3>
                <p className="text-xs md:text-sm text-gray-600 md:mt-1">Chia sẻ, lợi ích chung</p>
              </div>
            </div>

            {/* Tâm Thức */}
            <div className="flex md:flex-col md:space-y-3 items-start md:items-center gap-3 p-3 md:p-6 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 md:from-purple-50 md:to-transparent border border-purple-200">
              <Brain className="w-5 h-5 md:w-8 md:h-8 text-purple-600 flex-shrink-0" />
              <div className="md:text-center">
                <h3 className="font-bold text-purple-600 text-sm md:text-base">Tâm Thức</h3>
                <p className="text-xs md:text-sm text-gray-600 md:mt-1">Thấu hiểu nội tâm</p>
              </div>
            </div>

            {/* Tâm Đạo */}
            <div className="flex md:flex-col md:space-y-3 items-start md:items-center gap-3 p-3 md:p-6 rounded-lg bg-gradient-to-br from-orange-50 to-orange-100 md:from-orange-50 md:to-transparent border border-orange-200">
              <HandHeart className="w-5 h-5 md:w-8 md:h-8 text-orange-600 flex-shrink-0" />
              <div className="md:text-center">
                <h3 className="font-bold text-orange-600 text-sm md:text-base">Tâm Đạo</h3>
                <p className="text-xs md:text-sm text-gray-600 md:mt-1">Chân thành, yêu thương</p>
              </div>
            </div>
          </div>

          {/* 5 Chữ Tâm Details Section */}
          <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-6 sm:p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10 md:mb-12 text-center">
              Hành Trình 5 Chữ Tâm
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
              {[
                {
                  number: 1,
                  title: "Tâm Sáng",
                  content:
                    "Tâm phải sáng thì tầm mới cao. Ánh sáng của tri thức, tư duy sáng tạo và định hướng rõ ràng về tương lai.",
                },
                {
                  number: 2,
                  title: "Tâm Huyết",
                  content:
                    "Khát vọng, đam mê, tinh thần trách nhiệm cao. Là nguồn năng lượng thúc đẩy chúng ta tiến tới mục tiêu.",
                },
                {
                  number: 3,
                  title: "Tâm Khỏe",
                  content:
                    "Cho là nhận, tất cả vì sức khỏe và lợi ích cộng đồng. Sự cân bằng giữa phát triển cá nhân và đóng góp xã hội.",
                },
                {
                  number: 4,
                  title: "Tâm Thức",
                  content:
                    "Thấu hiểu nội tâm, từ trái tim đến trái tim. Sâu sắc, cảm thông, kết nối chân thật với mọi người.",
                },
                {
                  number: 5,
                  title: "Tâm Đạo",
                  content:
                    "Chân thành, yêu thương và chia sẻ. Hành động từ trái tim, xây dựng giá trị bền vững cho tập thể.",
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-purple-600 to-orange-500 text-white flex items-center justify-center text-lg sm:text-xl mx-auto mb-3 sm:mb-4">
                    {item.number}
                  </div>
                  <h4 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Models Section */}
      <section id="models" className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            6 Mô hình hoạt động
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
            {/* Training */}
            <div className="p-4 md:p-6 rounded-lg bg-white border border-blue-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Đào tạo</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Workshop, seminar, và khóa học chuyên ngành từ các chuyên gia
              </p>
            </div>

            {/* Mentoring */}
            <div className="p-4 md:p-6 rounded-lg bg-white border border-purple-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-purple-600" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Mentoring</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Hướng dẫn từ các mentor kinh nghiệm và doanh nhân thành công
              </p>
            </div>

            {/* Job Placement */}
            <div className="p-4 md:p-6 rounded-lg bg-white border border-green-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Hỗ trợ việc làm</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Kết nối với các công ty và cơ hội việc làm hấp dẫn
              </p>
            </div>

            {/* Funding */}
            <div className="p-4 md:p-6 rounded-lg bg-white border border-orange-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Tài chính</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Hỗ trợ vốn khởi động và kết nối nhà đầu tư
              </p>
            </div>

            {/* Networking */}
            <div className="p-4 md:p-6 rounded-lg bg-white border border-pink-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <Award className="w-6 h-6 md:w-8 md:h-8 text-pink-600" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Kết nối</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Mạng lưới sinh viên khởi nghiệp, doanh nhân và đối tác
              </p>
            </div>

            {/* Resources */}
            <div className="p-4 md:p-6 rounded-lg bg-white border border-indigo-200 hover:shadow-lg transition">
              <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-3">
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
                <h3 className="font-bold text-gray-900 text-sm md:text-base">Tài nguyên</h3>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                Công cụ, tài liệu, và nguồn tài nguyên hữu ích
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-20 md:py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-14 md:mb-16 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Quyền lợi thành viên</h2>
            <p className="text-base sm:text-lg text-gray-600">Giá trị thực tế khi gia nhập cộng đồng</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-8">
            <div className="space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-purple-50 to-transparent rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">Đào tạo</h3>
                <p className="text-sm text-gray-600">Kỹ năng & nghề miễn phí, khóa CEO exclusive</p>
              </div>
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">Giải quyết việc làm</h3>
                <p className="text-sm text-gray-600">100% sinh viên được hỗ trợ việc làm</p>
              </div>
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-orange-50 to-transparent rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">Thẻ hội viên</h3>
                <p className="text-sm text-gray-600">Thẻ SSC + APEC với đặc quyền hệ sinh thái</p>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-green-50 to-transparent rounded-xl border-l-4 border-green-600 hover:shadow-lg transition">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">Đầu tư vốn</h3>
                <p className="text-sm text-gray-600">Hỗ trợ tài chính khởi nghiệp & lập nghiệp</p>
              </div>
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-pink-50 to-transparent rounded-xl border-l-4 border-pink-600 hover:shadow-lg transition">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">Giải thưởng & Công nhân</h3>
                <p className="text-sm text-gray-600">Bằng cấp & giải thưởng xuất sắc từ APEC</p>
              </div>
              <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-indigo-50 to-transparent rounded-xl border-l-4 border-indigo-600 hover:shadow-lg transition">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1.5 sm:mb-2">Thu nhập đa chiều</h3>
                <p className="text-sm text-gray-600">Thu nhập CLB + từ năng suất cá nhân</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Cấu trúc tổ chức</h2>
            <p className="text-base sm:text-lg text-gray-600">9 ban chức năng & 12 phân đội thực chiến</p>
          </div>

          {/* Mind Map Tree Infographic */}
          <div className="flex flex-col items-center">
            {/* CEO/President - Root */}
            <div className="mb-8 sm:mb-10 md:mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-white text-center shadow-lg">
                <p className="font-bold text-base sm:text-lg">Ban Chủ tịch</p>
              </div>
            </div>

            {/* First Level - 3 Main Branches */}
            <div className="w-full relative mb-8 sm:mb-10 md:mb-12">
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-blue-600 to-transparent"></div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative">
                {/* Leadership Branch */}
                <div className="flex flex-col items-center">
                  <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-300"></div>
                  <div
                    className="hidden md:block absolute -top-8 left-0 right-0 h-0.5 bg-blue-300"
                    style={{ left: "50%" }}
                  ></div>

                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg px-5 sm:px-6 py-2 sm:py-3 text-white text-center shadow-md w-full">
                    <p className="font-bold text-sm sm:text-base">Ban Chấp hành</p>
                  </div>

                  <div className="mt-4 space-y-2 w-full">
                    {["Ban Tài chính", "Ban Truyền thông"].map((dept, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg px-4 py-2 text-center border-l-4 border-indigo-500 shadow-sm"
                      >
                        <p className="text-xs sm:text-sm font-semibold text-gray-700">{dept}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Training & Support Branch */}
                <div className="flex flex-col items-center">
                  <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-300"></div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg px-5 sm:px-6 py-2 sm:py-3 text-white text-center shadow-md w-full">
                    <p className="font-bold text-sm sm:text-base">Ban Đào tạo</p>
                  </div>

                  <div className="mt-4 space-y-2 w-full">
                    {["Ban Hỗ trợ tư vấn", "Ban Chăm sóc hội viên"].map((dept, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg px-4 py-2 text-center border-l-4 border-purple-500 shadow-sm"
                      >
                        <p className="text-xs sm:text-sm font-semibold text-gray-700">{dept}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Culture & Customer Branch */}
                <div className="flex flex-col items-center">
                  <div className="hidden md:block absolute -top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-blue-300"></div>
                  <div
                    className="hidden md:block absolute -top-8 right-0 h-0.5 bg-blue-300"
                    style={{ right: "50%" }}
                  ></div>

                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg px-5 sm:px-6 py-2 sm:py-3 text-white text-center shadow-md w-full">
                    <p className="font-bold text-sm sm:text-base">Ban Văn hóa</p>
                  </div>

                  <div className="mt-4 space-y-2 w-full">
                    {["Ban Chăm sóc khách hàng"].map((dept, i) => (
                      <div
                        key={i}
                        className="bg-white rounded-lg px-4 py-2 text-center border-l-4 border-orange-500 shadow-sm"
                      >
                        <p className="text-xs sm:text-sm font-semibold text-gray-700">{dept}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Combat Teams Section */}
            <div className="w-full bg-white rounded-2xl border-2 border-blue-200 p-4 sm:p-6 md:p-8 mt-6 sm:mt-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
                <div>
                  <p className="text-sm sm:text-base font-bold text-gray-900">12 Phân đội thực chiến</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">
                    Mỗi đội 12 thành viên • 1 đội trưởng & 2 đội phó
                  </p>
                </div>
                <div className="flex gap-2">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold shadow-md"
                    >
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Hành trình phát triển</h2>
            <p className="text-sm sm:text-base text-gray-600">3 giai đoạn nâng cao kỹ năng & cơ hội</p>
          </div>

          <div className="relative">
            <div className="absolute top-6 sm:top-7 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-purple-600 via-orange-500 to-red-500 hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 relative z-10">
              {[
                {
                  stage: 1,
                  title: "Khởi đầu",
                  items: ["Đào tạo kỹ năng", "Huấn luyện chuyên môn", "Trải nghiệm thực tế"],
                  color: "from-purple-600 to-purple-700",
                },
                {
                  stage: 2,
                  title: "Phát triển",
                  items: ["Khóa quản lý", "Bổ nhiệm chức danh", "Nâng cao trách nhiệm"],
                  color: "from-orange-500 to-orange-600",
                },
                {
                  stage: 3,
                  title: "Thành công",
                  items: ["Khóa CEO", "Đầu tư khởi nghiệp", "Bổ nhiệm Giám đốc"],
                  color: "from-red-500 to-red-600",
                },
              ].map((stage, idx) => (
                <div key={idx} className="relative">
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div
                      className={`bg-gradient-to-br ${stage.color} rounded-full w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex items-center justify-center text-white font-bold text-base sm:text-lg border-4 border-white shadow-lg`}
                    >
                      {stage.stage}
                    </div>
                  </div>
                  <div className="p-4 sm:p-5 bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 sm:mb-3 text-center">
                      {stage.title}
                    </h3>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {stage.items.map((item, i) => (
                        <li key={i} className="flex gap-2 text-gray-600 text-xs sm:text-sm">
                          <span
                            className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1 bg-gradient-to-r ${stage.color}`}
                          ></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-r from-purple-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 text-balance">
            Sẵn sàng bắt đầu hành trình khởi nghiệp?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Gia nhập cộng đồng 1000+ sinh viên khởi nghiệp và nhận hỗ trợ toàn diện từ đào tạo, việc làm, đến đầu tư
            vốn.
          </p>
          <button className="px-6 sm:px-8 py-3 bg-white text-purple-600 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 hover:shadow-xl transition">
            Gia nhập ngay
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-14 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-8 sm:mb-10 md:mb-12">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Image src="/logo.png" alt="Student Startup Logo" width={32} height={32} className="w-8 h-8" />
                <span className="font-bold text-sm sm:text-base">Student Startup</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-400">Hỗ trợ sinh viên khởi nghiệp thành công</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Về Chúng Tôi</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#mission" className="hover:text-white transition">
                    Sứ mệnh
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    5 Chữ Tâm
                  </a>
                </li>
                <li>
                  <a href="#models" className="hover:text-white transition">
                    Mô hình
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Dịch Vụ</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>
                  <a href="#benefits" className="hover:text-white transition">
                    Quyền lợi
                  </a>
                </li>
                <li>
                  <a href="#journey" className="hover:text-white transition">
                    Hành trình
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Liên Hệ</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li>Email: info@studentstartup.edu.vn</li>
                <li>Phone: +84 (0) 123 456 789</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 sm:pt-10">
            <p className="text-center text-xs sm:text-sm text-gray-500">
              © 2026 Student Startup Club. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
