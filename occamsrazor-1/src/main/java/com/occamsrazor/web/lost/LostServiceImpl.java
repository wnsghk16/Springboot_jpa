package com.occamsrazor.web.lost;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.occamsrazor.web.util.Messenger;

@Service
public class LostServiceImpl implements LostService{
	@Autowired LostDao lostDao;

	@Override
	public void register(Lost lost) {
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
	public List<Lost> findAll() {
		return lostDao.selectAll();
	}

	@Override
	public Lost findOne(String lostId) {
		return lostDao.selectOne(lostId);
	}

	@Override
	public Messenger modify(Lost lost) {
		return lostDao.update(lost);
	}

	@Override
	public Messenger remove(Lost lost) {
		return lostDao.delete(lost);
	}

}
