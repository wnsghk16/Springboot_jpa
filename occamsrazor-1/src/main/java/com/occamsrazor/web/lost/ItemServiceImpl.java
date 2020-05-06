package com.occamsrazor.web.lost;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.occamsrazor.web.util.Messenger;

@Service
public class ItemServiceImpl implements ItemService{
	@Autowired ItemDao lostDao;

	@Override
	public void register(Item lost) {
		lost.setLostId(createLostId());
		lost.setLostDate(createCurrentDate());
		lostDao.insert(lost);
	}

	private String createCurrentDate() {
		return new SimpleDateFormat("yyyy-MM-dd").format(new Date());
	}

	private String createLostId() { //1씩 증가하는걸로 수정해야함
		String startNum="";
		for(int i=0; i<7; i++) {
			startNum += (int)(Math.random()*10);
		}
		return startNum;
	}

	@Override
	public List<Item> findAll() {
		return lostDao.selectAll();
	}

	@Override
	public Item findOne(String lostId) {
		return lostDao.selectOne(lostId);
	}

	@Override
	public Messenger modify(Item lost) {
		return lostDao.update(lost);
	}

	@Override
	public Messenger remove(Item lost) {
		return lostDao.delete(lost);
	}

}
