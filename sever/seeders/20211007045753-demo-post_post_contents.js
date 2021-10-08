'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: '1',
        name: 'kimcoding',
        email: 'kimcoding@test.com',
        password: '1234',
        mobile: '010-1111-1111',
        gender: 'male',
        image: null,
        salt: "1a2a4a",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '2',
        name: 'parkhacker',
        email: 'parkhacker@test.com',
        password: '5678',
        mobile: '010-2222-2222',
        gender: 'male',
        image: null,
        salt: "1a2a4a",
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '3',
        name: 'leebug',
        email: 'leebug@test.com',
        password: '1234',
        mobile: '010-3333-3333',
        gender: 'female',
        image: null,
        salt: "1a2a4a",
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);
    
    const user = await queryInterface.sequelize.query(`SELECT id FROM users;`);
    const userRows = user[0];

    await queryInterface.bulkInsert('posts', [
      {
        id: '1',
        title: '경기도를 대표하는 차박지!!',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '2',
        title: '전라도를 대표하는 차박지!!',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '3',
        title: '빌딩 숲에 숨겨진 서울 차박지',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '4',
        title: '사람들을 피해 도착한 바다 근처 꿀스팟',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '5',
        title: '불멍때리기 딱 좋은 조용한 장소',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '6',
        title: '애완견과 함께 쉴 수 있는 차박지',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '7',
        title: '이성친구가 연인이 되는 분위기 좋은 장소',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '8',
        title: '여기선 소주 한짝도 마실 수 있을 것 같지만 음주운전은 안되니까',
        viewCount: 0,
        userId: userRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);

    const post = await queryInterface.sequelize.query(`SELECT id FROM posts;`);
    const postRows = post[0];

    await queryInterface.bulkInsert('comments', [
      {
        id: '1',
        content: '차박하기 좋은 장소군요!!',
        userId: userRows[2].id,
        postId: postRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '2',
        content: '꼭 한번 가보세요~!',
        userId: userRows[0].id,
        postId: postRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '3',
        content: '이성친구랑 갔다가 그냥 왔어요..',
        userId: userRows[1].id,
        postId: postRows[6].id,
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);

    await queryInterface.bulkInsert('tags', [
      {
        id: '1',
        seasonTag: '봄',
        localTag: '경기도',
        postId: postRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '2',
        seasonTag: '가을',
        localTag: '전라도',
        postId: postRows[1].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '3',
        seasonTag: '여름',
        localTag: '서울',
        postId: postRows[2].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '4',
        seasonTag: '여름',
        localTag: '강원도',
        postId: postRows[3].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '5',
        seasonTag: '가을',
        localTag: '충청도',
        postId: postRows[4].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '6',
        seasonTag: '봄',
        localTag: '경기도',
        postId: postRows[5].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '7',
        seasonTag: '봄',
        localTag: '서울',
        postId: postRows[6].id,
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        id: '8',
        seasonTag: '여름',
        localTag: '경상도',
        postId: postRows[7].id,
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);

    await queryInterface.bulkInsert('post_images', [
      {
        id: '0',
        image: null,
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);

    await queryInterface.bulkInsert('post_contents', [
      {
        id: '0',
        contents: '차박하기 아주 좋은 곳을 알려드릴게요! 네 알려드렸습니다~',
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);

    const postContents = await queryInterface.sequelize.query(`SELECT id FROM post_contents;`)
    const postContentsRows = postContents[0];

    await queryInterface.bulkInsert('post_post_contents', [
      {
        id: '0',
        postId: postRows[0].id,
        postContentsId: postContentsRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);

    const postImage = await queryInterface.sequelize.query(`SELECT id FROM post_images;`)
    const postImageRows = postImage[0];

    await queryInterface.bulkInsert('post_post_images', [
      {
        id: '0',
        postId: postRows[0].id,
        postImageId: postImageRows[0].id,
        createdAt: new Date,
        updatedAt: new Date
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('posts', null, {});
    await queryInterface.bulkDelete('comments', null, {});
    await queryInterface.bulkDelete('tags', null, {});
    await queryInterface.bulkDelete('post_images', null, {});
    await queryInterface.bulkDelete('post_contents', null, {});
    await queryInterface.bulkDelete('post_post_contents', null, {});
    await queryInterface.bulkDelete('post_post_images', null, {});
  }
};
