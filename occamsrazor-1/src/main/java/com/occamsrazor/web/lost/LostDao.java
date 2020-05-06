package com.occamsrazor.web.lost;

import java.util.List;

import com.occamsrazor.web.util.Messenger;

public interface LostDao {
	public void insert(Lost lost);
	public List<Lost> selectAll();
	public Lost selectOne(String lostId);
	public Messenger update(Lost lost);
	public Messenger delete(Lost lost);
}
